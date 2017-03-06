import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { CategoryService } from '../../providers/recipe-category.service';
import { Category } from '../../models/category.model';
import { RecipeListPage } from '../recipe-list/recipe-list.page';

@Component({
	selector: 'recipe-category-list',
	templateUrl: 'category-list.page.html'
})
export class CategoryListPage {

	public items: Category[] = [];

	constructor(public navCtrl: NavController, public categories: CategoryService) {
		categories.all().subscribe(r => this.items.push(r));
	}

	public select(item: Category): void {
		this.navCtrl.push(RecipeListPage, {
			category: item
		});
	}
}
