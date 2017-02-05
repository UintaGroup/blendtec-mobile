import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { BlendtecApi } from './blendtec-api';
import { Response } from "@angular/http";

@Injectable()
export class Recipes {
	private _resource: string = 'recipes';

	constructor(private _api: BlendtecApi, protected translate: TranslateService) {}

	all(params?: any) {
		return this._api
			.get(this._resource, params)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw("No recipes found."));
	}

	one(slug: string) {
		return this._api
			.get(this._resource + '/' + slug)
			.map((r: Response) => {
				let body = r.json();
				return new Recipe(body.Recipe, body.RelatedRecipe, body.RecipeIngredientsRecipe);
			})
			.catch(() => Observable.throw("Unable to find recipe."));
	}

	category(categorySlug: string) {
		return this._api
			.get(this._resource + '/categories/' + categorySlug)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw("No recipes found."));
	}

	page(page: number) {
		return this._api
			.get(this._resource + '/index/page:' + page)
			.map((r: Response) => {
				return r.json().recipes.map(x => {
					return new Recipe(x.Recipe);
				});
			})
			.catch(() => Observable.throw("No recipes found."));
	}
}
