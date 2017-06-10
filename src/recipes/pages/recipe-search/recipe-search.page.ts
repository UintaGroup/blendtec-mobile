import { Component } from '@angular/core';
import { Events, NavController, ToastController } from 'ionic-angular';

import { RecipeService } from '../../providers/recipe.service';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';
import { Recipe } from '../../models/recipe.model';
import { CommonEvents } from '../../../common/models/common-events';

@Component({
	selector: 'page-search',
	templateUrl: './recipe-search.page.html'
})
export class RecipeSearchPage {
	query: string = '';
	currentItems: any = [];

	constructor(private _navCtrl: NavController,
				private _toastCtrl: ToastController,
				private _events: Events,
				private _recipeSrvc: RecipeService) {
		this._recipeSrvc.all()
			.subscribe(r => this.currentItems = r);
	}

	public getItems(): void {
		if (!this.query) return;
		this._recipeSrvc.all('ingredient=' + this.query)
			.subscribe(
				r => this.currentItems = r,
				err => {
					let toast = this._toastCtrl.create({
						message: err,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				}
			);
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'RecipeSearch');
	}

	public clearSearch(): void {
		this.query = '';
	}

	public openItem(recipe: Recipe): void {
		this._navCtrl.push(RecipeDetailPage, {
			slug: recipe.slug
		});
	}
}
