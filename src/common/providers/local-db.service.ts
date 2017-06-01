import { Injectable }   from '@angular/core';
import {Storage}        from '@ionic/storage';

@Injectable()
export class DbService {

	constructor(private _db: Storage) {}

	public ready(): Promise<any> {
		return this._db.ready();
	}

	public get driver(): string {
		return this._db.driver;
	}

	public get(key: string): Promise<any> {
		return this._db.get(key)
			.then(results => {
				if (results && results[0] === '{') {
					return JSON.parse(results);
				} else {
					return results;
				}
			});
	}

	public set(key: string, value: any): Promise<any> {
		if (value instanceof Object) {
			value = JSON.stringify(value);
		}
		return this._db.set(key, value);
	}

	public remove(key: string): Promise<void> {
		return this._db.remove(key);
	}

	public clear(): Promise<void> {
		return this._db.clear();
	}

	public length(): Promise<number> {
		return this._db.length();
	}

	public keys(): Promise<string[]> {
		return this._db.keys();
	}

	public foreach(callBack: () => Promise<any>): Promise<void> {
		return this._db.forEach(callBack);
	}
}