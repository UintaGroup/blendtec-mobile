import { IDbTable } from '../../common/models';

export const TABLES: IDbTable[] = [
	{
		name: 'recipes_favorites',
		columns: [
			{ name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT' },
			{ name: 'date', type: 'TEXT' }
		]
	}
];