import { Component }                from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

import { CommonEvents }             from '../../../common/models';
import { RecipeService }            from '../../providers';
import { BaseRecipe, Recipe }       from '../../models';

@Component({
	selector: 'page-item-detail',
	templateUrl: './recipe-detail.page.html'
})
export class RecipeDetailPage {

	public item: Recipe;
	public pageUrl: string;

	constructor(private _navCtrl: NavController,
				private _events: Events,
				navParams: NavParams,
				recipeSrvc: RecipeService) {

		let slug: string = navParams.get('slug');
		recipeSrvc.one(slug)
			.subscribe(r => {
				this.item = r;
				this.pageUrl = `http://www.blendtec.com/recipes/${slug}`;
			});
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'RecipeDetail');
	}

	public select(related: BaseRecipe): Promise<void> {
		return this._navCtrl.push(RecipeDetailPage, {
			slug: related.slug
		});
	}

}
