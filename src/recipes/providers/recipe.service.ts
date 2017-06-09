import { Injectable }       from '@angular/core';
import { Response }         from '@angular/http';
import { Events }           from 'ionic-angular';
import { Observable }       from 'rxjs';
import 'rxjs/add/operator/map';
import { TranslateService } from 'ng2-translate';

import { BlendtecApi }      from '../../common/providers';
import { LoadingEvents }    from '../../common/models';
import { Recipe }           from '../models';

@Injectable()
export class RecipeService {
	private _resource: string = 'recipes';

	constructor(private _api: BlendtecApi, protected translate: TranslateService, private _events: Events) {
	}

	public all(params?: any): Observable<Recipe[]> {
		this._events.publish(LoadingEvents.START);
		return this._api
			.get(this._resource, params)
			.map(r => {
				let data = r.json().recipes.map(x => new Recipe(x.Recipe));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch(err => {
				this._events.publish(LoadingEvents.END);
				return Observable.throw('No recipes found.');
			});
	}

	public one(slug: string): Observable<Recipe> {
		this._events.publish(LoadingEvents.START);
		return this._api
			.get(this._resource + '/' + slug)
			.map(r => {
				let body = r.json();
				let data = new Recipe(body.Recipe, body.RelatedRecipe, body.RecipeIngredientsRecipe);
				//TODO - api should return slug on recipe detail from API
				data.slug = slug;
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch(() => this._api.handleError('Unable to find recipe'));
	}

	public category(categorySlug: string): Observable<Recipe[]> {
		this._events.publish(LoadingEvents.START);
		return this._api
			.get(this._resource + '/categories/' + categorySlug)
			.map(r => {
				let data = r.json().recipes.map(x => new Recipe(x.Recipe));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch(() => this._api.handleError('No Recipes found.'));
	}

	public page(page: number): Observable<Recipe[]> {
		return this._api
			.get(this._resource + '/index/page:' + page)
			.map(r => r.json().recipes.map(x => new Recipe(x.Recipe)))
			.catch(() => this._api.handleError('No Recipes found.'));
	}
}
