import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { RecipeCategoryService } from '../../providers/recipe-category.service';
import { RecipeCategory } from '../../models/category.model';
import { RecipeListPage } from '../recipe-list/recipe-list.page';

@Component({
	selector: 'page-list-recipe-category',
	templateUrl: 'recipe-category-list.page.html'
})
export class RecipeCategoryListPage {

	public items: RecipeCategory[] = [];

	constructor(public navCtrl: NavController, public categories: RecipeCategoryService) {
		categories.all().subscribe(r => this.items.push(r));
	}

	public select(item: RecipeCategory): void {
		this.navCtrl.push(RecipeListPage, {
			category: item
		});
	}
}
