import { Injectable } from '@angular/core';
import { DbService }  from '../../common/providers';

export const recipeFavorites: string = 'recipe-favorites';

@Injectable()
export class RecipeFavoriteService {
	private _favorites: string[] = [];

	constructor(private _db: DbService) {
		this._db.get(recipeFavorites)
			.then(favs => this._favorites = favs ? JSON.parse(favs) : []);
	}

	public favorite(slug: string): Promise<any> {
		if (!this.isFavorite(slug)) {
			this._favorites.push(slug);
			return this.save();
		} else {
			return this.unFavorite(slug);
		}
	}

	public unFavorite(slug: string): Promise<any> {
		let index = this._favorites.indexOf(slug);
		this._favorites.splice(index, 1);
		return this.save();
	}

	public isFavorite(slug: string): boolean {
		return this._favorites.indexOf(slug) > -1;
	}

	private save(): Promise<void> {
		return this._db.set(recipeFavorites, this._favorites);
	}

}