import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Recipes } from '../../providers/recipes';
import { Recipe } from '../../models/recipe';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'recipe-detail.html'
})
export class RecipeDetailPage {
	public item: Recipe;

	constructor(public navCtrl: NavController, navParams: NavParams, recipes: Recipes) {
		recipes.one(navParams.get('slug')).subscribe(r => this.item = r);
	}

}
