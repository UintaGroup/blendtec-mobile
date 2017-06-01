import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeService }            from '../../providers';
import { BaseRecipe, Recipe }       from '../../models';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'recipe-detail.page.html'
})
export class RecipeDetailPage {

	public item: Recipe;

	constructor(private _navCtrl: NavController,
				navParams: NavParams,
				recipeSrvc: RecipeService) {
		let slug: string = navParams.get('slug');
		recipeSrvc.one(slug)
			.subscribe(r => this.item = r);
	}

	select(related: BaseRecipe): Promise<void> {
		return this._navCtrl.push(RecipeDetailPage, {
			slug: related.slug
		});
	}

}
