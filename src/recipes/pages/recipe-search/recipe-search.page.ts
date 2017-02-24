import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Recipes } from "../../providers/recipes";
import { RecipeDetailPage } from "../recipe-detail/recipe-detail.page";
import { Recipe } from "../../models/recipe";

@Component({
	selector: 'page-search',
	templateUrl: 'recipe-search.page.html'
})
export class RecipeSearchPage {
	query: string = '';
	currentItems: any = [];

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public recipes: Recipes) {
		this.recipes
			.all()
			.subscribe(recipes => this.currentItems = recipes);
	}

	getItems() {
		if(!this.query) return;
		this.recipes
			.all('ingredient=' + this.query)
			.subscribe(
				recipes => this.currentItems = recipes,
				(err) => {
					let toast = this.toastCtrl.create({
						message: err,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				}
			);
	}

	clearSearch() {
		this.query = '';
	}

	openItem(recipe: Recipe) {
		this.navCtrl.push(RecipeDetailPage, {
			slug: recipe.slug
		});
	}
}