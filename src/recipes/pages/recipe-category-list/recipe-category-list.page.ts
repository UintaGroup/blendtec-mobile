import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { RecipeCategories } from "../../providers/recipe-categories";
import { RecipeCategory } from '../../models/category';
import { RecipeListPage } from '../recipe-list/recipe-list.page';

@Component({
	selector: 'page-list-recipe-category',
	templateUrl: 'recipe-category-list.page.html'
})
export class RecipeCategoryListPage {

	public items: RecipeCategory[];

	constructor(public navCtrl: NavController, public categories: RecipeCategories) {
		this.items = [];
		categories.all().subscribe((r) => {
			this.items.push(r);
			console.log('ITEMS', this.items);
		});
	}

	select(item: RecipeCategory) {
		this.navCtrl.push(RecipeListPage, {
			category: item
		});
	}
}
