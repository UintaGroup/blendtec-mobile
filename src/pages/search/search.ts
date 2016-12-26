import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Recipes } from "../../providers/recipes";
import { RecipeDetailPage } from "../recipe-detail/recipe-detail";
import { Recipe } from "../../models/recipe";

@Component({
	selector: 'page-search',
	templateUrl: 'search.html'
})
export class SearchPage {
	query: string = '';
	currentItems: any = [];

	constructor(public navCtrl: NavController,
	            public navParams: NavParams,
	            public toastCtrl: ToastController,
	            public recipes: Recipes) {
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
			recipe: recipe.slug
		});
	}
}
