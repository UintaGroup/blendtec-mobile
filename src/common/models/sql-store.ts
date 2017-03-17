import { SQLite } from 'ionic-native';

const DB_NAME: string = '__blendtecMobile';
const win: any = window;

export class SqlStore {
	private _db: any = null;

	public init(): Promise<void> {
		return this.openConnection()
			.then(() => this.tryInit());
	}

	private openConnection(): Promise<void> {
		if (this._db !== null) {
			return Promise.resolve();

		}
		if (win.sqlitePlugin) {
			let db = new SQLite();
			return db.openDatabase({
				name: DB_NAME,
				location: 'default'
			}).then((db) => {
				this._db = db;
			});
		} else {
			console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
			this._db = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
			return Promise.resolve();
		}
	}

	// Initialize the DB with our required tables
	private tryInit(): void {
		this.query('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)')
			.catch(err => {
				console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
			});
	}

	/**
	 * Perform an arbitrary SQL operation on the database. Use this method
	 * to have full control over the underlying database through SQL operations
	 * like SELECT, INSERT, and UPDATE.
	 *
	 * @param {string} query the query to run
	 * @param {array} params the additional params to use for query placeholders
	 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
	 */
	public query(query: string, params: any[] = []): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				return this.openConnection().then(() =>
					this._db.transaction((tx: any) => {
							tx.executeSql(query, params,
								(innerTx: any, res: any) => resolve({tx: innerTx, res: res}),
								(innerTx: any, err: any) => reject({tx: innerTx, err: err}));
						},
						(err: any) => reject({err: err}))
				);
			} catch (err) {
				reject({err: err});
			}
		});
	}

	/**
	 * Get the value in the database identified by the given key.
	 * @param {string} key the key
	 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
	 */
	public get(key: string): Promise<any> {
		return this.query('select key, value from kv where key = ? limit 1', [key]).then(data => {
			if (data.res.rows.length > 0) {
				return data.res.rows.item(0).value;
			}
		});
	}

	/**
	 * Set the value in the database for the given key. Existing values will be overwritten.
	 * @param {string} key the key
	 * @param {string} value The value (as a string)
	 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
	 */
	public set(key: string, value: string): Promise<any> {
		return this.query('insert or replace into kv(key, value) values (?, ?)', [key, value]);
	}

	public getJson(key: string): Promise<any> {
		return this.get(key).then(value => {
			try {
				return JSON.parse(value);
			} catch (e) {
				console.warn('Storage getJson(): unable to parse value for key', key, ' as JSON');
				throw e; // rethrowing exception so it can be handled with .catch()
			}
		});
	}

	public setJson(key: string, value: any): Promise<any> {
		try {
			return this.set(key, JSON.stringify(value));
		} catch (e) {
			return Promise.reject(e);
		}
	}

	/**
	 * Remove the value in the database for the given key.
	 * @param {string} key the key
	 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
	 */
	public remove(key: string): Promise<any> {
		return this.query('delete from kv where key = ?', [key]);
	}

	/**
	 * Clear all keys/values of your database.
	 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
	 */
	public clear(): Promise<any> {
		return this.query('delete from kv');
	}
}