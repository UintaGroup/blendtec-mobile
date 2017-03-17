import {Injectable} from '@angular/core';
import {IDbTable}   from '../models';

@Injectable()
export class DbConfig {

	public get tables(): Array<IDbTable> {
		return this._tables;
	}

	private _tables: Array<IDbTable> = [
		{
			name: 'pickSettings',
			isObject: true,
			columns: [
				{ name: 'delimiter', type: 'TEXT' },
				{ name: 'identifier', type: 'TEXT' }
			]
		}
	];
}