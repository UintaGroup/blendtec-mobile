import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { RecipeService } from '../../providers/recipe.service';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'page-search',
	templateUrl: 'recipe-search.page.html'
})
export class RecipeSearchPage {
	query: string = '';
	currentItems: any = [];

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public recipes: RecipeService) {
		this.recipes
			.all()
			.subscribe(r => this.currentItems = r);
	}

	public getItems(): void {
		if(!this.query) return;
		this.recipes
			.all('ingredient=' + this.query)
			.subscribe(
				r => this.currentItems = r,
				err => {
					let toast = this.toastCtrl.create({
						message: err,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				}
			);
	}

	public clearSearch(): void {
		this.query = '';
	}

	public openItem (recipe: Recipe): void {
		this.navCtrl.push(RecipeDetailPage, {
			slug: recipe.slug
		});
	}
}
