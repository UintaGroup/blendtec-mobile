import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { TranslateService } from 'ng2-translate';

import { Recipe } from '../models/recipe.model';
import { BlendtecApi } from './blendtec-api';

@Injectable()
export class RecipeService {
	private _resource: string = 'recipes';

	constructor(private _api: BlendtecApi, protected translate: TranslateService) {}

	public all(params?: any): Observable<Recipe[]> {
		return this._api
			.get(this._resource, params)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw('No recipes found.'));
	}

	public one(slug: string): Observable<Recipe> {
		return this._api
			.get(this._resource + '/' + slug)
			.map((r: Response) => {
				let body = r.json();
				return new Recipe(body.Recipe, body.RelatedRecipe, body.RecipeIngredientsRecipe);
			})
			.catch(() => Observable.throw('Unable to find recipe.'));
	}

	public category(categorySlug: string): Observable<Recipe[]> {
		return this._api
			.get(this._resource + '/categories/' + categorySlug)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw('No recipes found.'));
	}

	public page(page: number): Observable<Recipe[]> {
		return this._api
			.get(this._resource + '/index/page:' + page)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw('No recipes found.'));
	}
}
