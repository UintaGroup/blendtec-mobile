import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { Recipes }          from '../../providers/recipes';
import { Recipe }           from '../../models/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { RecipeCategories } from "../../providers/recipe-categories";

@Component({
	selector: 'page-list-recipe',
	templateUrl: 'list-recipe.html'
})
export class ListRecipePage {

	public items: Recipe[];
	public page: number = 2;

	constructor(public navCtrl: NavController,
				public recipes: Recipes,
				public recipeCategories: RecipeCategories
	) {
		recipes.all().subscribe((r) => {
			this.items = r;
		});
		recipeCategories.all().subscribe((rC) => {
			console.log('CATEGORIES', rC);
		});
	}

	select(item: Recipe) {
		this.navCtrl.push(RecipeDetailPage, {
			slug: item.slug
		});
	}

	loadMore(infiniteScroll: any): any {
		return this.recipes.page(this.page++)
			.subscribe((r) => {
				this.items = this.items.concat(r);
				infiniteScroll.complete();
			});
	}

}
