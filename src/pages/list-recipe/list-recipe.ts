import { Component }        from '@angular/core';
import { NavController, NavParams, ToastController }    from 'ionic-angular';
import { Recipes }          from '../../providers/recipes';
import { Recipe }           from '../../models/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { RecipeCategory } from "../../models/category";

@Component({
	selector: 'page-list-recipe',
	templateUrl: 'list-recipe.html'
})
export class ListRecipePage {

	public items: Recipe[];
	public page: number = 1;
	public category: RecipeCategory;

	constructor(public navCtrl: NavController,
				public params: NavParams,
				public toastCtrl: ToastController,
				public recipes: Recipes) {

		this.category = params.get('category');

		if (this.category) {
			this.recipes
				.category(this.category.slug)
				.subscribe(
					r => this.items = r,
					(err) => {
						let toast = this.toastCtrl.create({
							message: err,
							duration: 3000,
							position: 'top'
						});
						toast.present();
					}
				);
		} else {
			recipes.all().subscribe((r) => {
				this.items = r;
			});
		}
	}

	select(item: Recipe) {
		this.navCtrl.push(RecipeDetailPage, {
			slug: item.slug
		});
	}

	loadMore(infiniteScroll: any): any {
		return this.recipes.page(++this.page)
			.subscribe((r) => {
				this.items = this.items.concat(r);
				infiniteScroll.complete();
			});
	}

}
