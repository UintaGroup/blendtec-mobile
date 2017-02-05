import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { RecipeCategories } from "../../providers/recipe-categories";
import { RecipeCategory } from '../../models/category';
import { ListRecipePage } from '../list-recipe/list-recipe';

@Component({
	selector: 'page-list-recipe-category',
	templateUrl: 'list-recipe-category.html'
})
export class ListRecipeCategoryPage {

	public items: RecipeCategory[];

	constructor(public navCtrl: NavController, public categories: RecipeCategories) {
		this.items = [];
		categories.all().subscribe((r) => {
			this.items.push(r);
			console.log('ITEMS', this.items);
		});
	}

	select(item: RecipeCategory) {
		this.navCtrl.push(ListRecipePage, {
			category: item
		});
	}
}
