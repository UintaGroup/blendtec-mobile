import { Component }                from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { Events, NavController }    from 'ionic-angular';

import { CommonEvents }             from '../../../common/models';
import { RecipeCategoryService }    from '../../providers';
import { RecipeCategory }           from '../../models';

import { RecipeListPage }           from '../recipe-list/recipe-list.page';

@Component({
	selector: 'recipe-category-list',
	templateUrl: './recipe-category-list.page.html'
})
export class RecipeCategoryListPage {

	public items: Observable<RecipeCategory[]>;

	constructor(private _navCtrl: NavController, private _events: Events, categorySrvc: RecipeCategoryService) {
		this.items = categorySrvc.all();
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'RecipeCategoryList');
	}

	public select(item: RecipeCategory): void {
		this._navCtrl.push(RecipeListPage, {
			slug: item.slug
		});
	}
}
