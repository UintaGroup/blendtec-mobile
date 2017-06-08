import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LogService }       from '../../../common/providers';
import { RecipeService }    from '../../providers';
import { Recipe, RecipeCategory } from '../../models';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

@Component({
	selector: 'page-list-recipe',
	templateUrl: 'recipe-list.page.html'
})
export class RecipeListPage {

	public items: Recipe[];
	public page: number = 1;
	public category: RecipeCategory;

	constructor(params: NavParams,
				private _navCtrl: NavController,
				private _recipeSrvc: RecipeService,
				private _logSrvc: LogService) {

		this.category = params.get('category');

		if (this.category) {
			console.log('RECIPE LIST', this._recipeSrvc);
			this._recipeSrvc.category(this.category.slug)
				.subscribe(
					r => {
						this.items = r;
						console.log('ITEMS', this.items);
					},
					err => console.warn(err)
				);
		} else {
			this._recipeSrvc.all()
				.subscribe(
					r => {
						this.items = r;
						console.log('ITEMS', this.items);
					},
					err => console.warn(err)
				);
		}
	}

	public select(item: Recipe): Promise<void> {
		return this._navCtrl.push(RecipeDetailPage, {
			slug: item.slug
		});
	}

	public loadMore(): Promise<any> {
		return this._recipeSrvc.page(++this.page)
			.toPromise()
			.then(r => this.items = this.items.concat(r));
	}

}
