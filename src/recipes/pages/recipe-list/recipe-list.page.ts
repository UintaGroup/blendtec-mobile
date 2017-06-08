import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LogService }       from '../../../common/providers';
import { RecipeService }    from '../../providers';
import { Recipe, RecipeCategory } from '../../models';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';
import { RecipeCategoryService } from '../../providers/recipe-category.service';

@Component({
	selector: 'page-list-recipe',
	templateUrl: 'recipe-list.page.html'
})
export class RecipeListPage {

	public items: Recipe[];
	public page: number = 1;
	public slug: string;
	public category: RecipeCategory;

	constructor(params: NavParams,
				private _navCtrl: NavController,
				private _recipeSrvc: RecipeService,
				private _categorySrvc: RecipeCategoryService,
				private _logSrvc: LogService) {

		this.slug = params.get('slug');


		if (this.slug) {
			this._recipeSrvc.category(this.slug)
				.subscribe(
					r => this.items = r,
					err => _logSrvc.error(err)
				);

			this._categorySrvc.getBySlug(this.slug)
				.subscribe(c => this.category = c);
		} else {
			this._recipeSrvc.all()
				.subscribe(
					r => this.items = r,
					err => _logSrvc.error(err)
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
