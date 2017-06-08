import { Component }                from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { NavController }            from 'ionic-angular';
import { RecipeCategoryService }    from '../../providers/recipe-category.service';
import { RecipeCategory }           from '../../models';

import { RecipeListPage }           from '../recipe-list/recipe-list.page';

@Component({
	selector: 'recipe-category-list',
	templateUrl: 'category-list.page.html'
})
export class CategoryListPage {

	public items: Observable<RecipeCategory[]>;

	constructor(public navCtrl: NavController, public categories: RecipeCategoryService) {
		this.items = categories.all();
	}

	public select(item: RecipeCategory): void {
		this.navCtrl.push(RecipeListPage, {
			category: item
		});
	}
}
