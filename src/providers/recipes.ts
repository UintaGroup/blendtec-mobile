import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { BlendtecApi } from './blendtec-api';

@Injectable()
export class Recipes {
	private _resource: string = 'recipes';

	constructor(private _api : BlendtecApi) {}

	all(params?: any): Observable<Recipe[]> {
		return this._api
			.get(this._resource, params)
			.map((response) => {
			console.log('RESPONSE', response);
				return response.json().recipes.map(node => {return new Recipe(node.Recipe);});
			});
	}

	one(slug: string): Observable<Recipe> {
		return this._api
			.get(this._resource + '/' + slug)
			.map((response) => {
				return new Recipe(response.json().Recipe);
			});
	}

	page(page: number) {
		return this._api
			.get(this._resource + '/index/page:' + page)
			.map((response) => {
				return response.json().recipes.map(node => {return new Recipe(node.Recipe);});
			});
	}
}
