import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeService } from '../../providers/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { BaseRecipe } from '../../models/base-recipe.model';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'recipe-detail.page.html'
})
export class RecipeDetailPage {
	public item: Recipe;

	constructor(public navCtrl: NavController, navParams: NavParams, recipes: RecipeService) {
		recipes.one(navParams.get('slug')).subscribe(r => this.item = r);

	}

	select(related: BaseRecipe): void {
		this.navCtrl.push(RecipeDetailPage, {
			slug: related.slug
		});
	}

}
