import { Injectable }         from '@angular/core';
import { SqlStore }           from '../models/sql-store';
import { LoggerService }      from './logger.service';
import { IDbTable }           from '../models';
import { DbConfig }           from './db.config';

interface Transaction {
	executeSql(query: string, params: any[], success: Function, error: Function): void;
}

@Injectable()
export class LocalDbService {

	private _db: SqlStore = null;

	constructor(private _logger: LoggerService, private _dbConfig: DbConfig) {
	}

	private init(): Promise<any> {
		if (this._db === null) {
			this._db = this._db || new SqlStore();
			return this._db.init();
		} else {
			return Promise.resolve();
		}
	}

	public query(query: string, params?: any[]): Promise<any> {
		return this.init().then(() => {
			return this._db.query(query, params);
		});
	}

	public queryWithArrayResult(query: string, params?: any[]): Promise<Array<any>> {
		return this.init().then(() => {
			return this._db.query(query, params).then((results) => {
				let final: any[] = [];
				for (let i: number = 0; i < results.res.rows.length; i++) {
					final.push(results.res.rows.item(i));
				}
				return final;
			});
		});
	}

	public get(key: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.init().then(() => {
				this._db.get(key)
					.then((results) => {
						if (results && results[0] === '{') {
							resolve(JSON.parse(results));
						} else {
							resolve(results);
						}
					})
					.catch((err) => reject(err));
			});
		});
	}

	public set(key: string, value: any): Promise<any> {
		return this.init().then(() => {
			if (value instanceof Object) {
				value = JSON.stringify(value);
			}
			return this._db.set(key, value);
		});
	}

	public setupDb(reset?: boolean): Promise<any> {
		return new Promise((resolve, reject) => {

			this.init().then(() => {

				let commands: Array<Promise<any>> = [];
				if (reset) {
					this._dbConfig.tables.forEach(table => {
						commands.push(this.query('DROP TABLE IF EXISTS ' + table.name));
					});
				}
				Promise.all(commands)
					.then(() => {
						commands.length = 0;
						this._dbConfig.tables.forEach(table => {
							if (table.isObject !== true) {
								let query: string = 'CREATE TABLE IF NOT EXISTS ' + table.name +
									'(' + table.columns.map((c) => {
										return c.name + ' ' + c.type;
									}).join(', ');
								query = query.slice(0, query.length - 1) + ')';
								commands.push(this.query(query));
							}
						});
						Promise.all(commands)
							.then(() => resolve())
							.catch(err => reject(err));
					})
					.catch(err => reject(err));
			})
				.catch((err) => reject(err));

		});
	}

	public dropAndCreate(tableName: string): Promise<any> {
		return new Promise((resolve, reject) => {
			let table: IDbTable = this._dbConfig.tables.find(tbl => tbl.name === tableName);
			if (table.isObject === true) {
				resolve();
			} else {
				this.query('DROP TABLE IF EXISTS ' + table.name)
					.then(() => {
						if (table.isObject !== true) {
							let query: string = 'CREATE TABLE IF NOT EXISTS ' + table.name +
								'(' + table.columns.map((c) => {
									return c.name + ' ' + c.type;
								}).join(', ');
							query = query.slice(0, query.length - 1) + ')';
							this.query(query).then(() => resolve());
						}
					})
					.catch(err => reject(err));
			}
		});
	}

	public seedTable(tableName: string, rows: any[]): Promise<any> {
		return new Promise((resolve, reject) => {

			this.init().then(() => {
				let table: IDbTable = this._dbConfig.tables.find(tbl => tbl.name === tableName);

				if (table.isObject === true) {
					this.set(table.name, rows[0])
						.then(() => resolve())
						.catch((err) => reject(err));
				} else {
					this._db['_db'].transaction((tx: Transaction) => { // naughty naughty
							rows.forEach((row) => {
								let params: any[] = [];
								let query: string = 'INSERT OR REPLACE INTO ' + table.name +
									' (' + table.columns.map((c) => {
										return c.name;
									}).join(', ') + ') VALUES(';
								table.columns.forEach((col, j) => {
									query += (j === 0 ? '?' : ', ?');
									params.push(row[col.name]);
								});
								query += ')';
								tx.executeSql(query, params,
									() => {
										/*success*/
									},
									(err) => {
										this._logger.log(err);
									});
							});
						}
						, (error) => reject(error)
						, () => {
							this._logger.log('sync for "' + table.name + '" with ' + rows.length + ' rows completed');
							resolve();
						});
				}
			});
		});
	}

	public insert(tableName: string, model: any): Promise<any> {
		let table: IDbTable = this._dbConfig.tables.find(tbl => tbl.name === tableName);

		let params: any[] = [];
		let query: string = 'INSERT OR REPLACE INTO ' + table.name + ' (';
		let first: boolean = true;
		table.columns.forEach((col) => {
			if (col.name !== 'id' || (col.name === 'id' && model.id > 0)) {
				query += (first ? col.name : ', ' + col.name);
				first = false;
			}
		});
		query += ') VALUES(';
		first = true;
		table.columns.forEach((col) => {
			if (col.name !== 'id' || (col.name === 'id' && model.id > 0)) {
				query += (first ? '?' : ', ?');
				params.push(model['_' + col.name]);
				first = false;
			}
		});
		query += ')';

		return this.query(query, params);
	}
}