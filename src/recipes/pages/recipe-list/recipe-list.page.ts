import { Component }        from '@angular/core';
import { NavController, NavParams, ToastController }    from 'ionic-angular';
import { RecipeService }          from '../../providers/recipe.service';
import { Recipe }           from '../../models/recipe.model';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';
import { Category } from '../../models/category.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'page-list-recipe',
	templateUrl: 'recipe-list.page.html'
})
export class RecipeListPage {

	public items: Recipe[];
	public page: number = 1;
	public category: Category;

	constructor(public navCtrl: NavController,
				public params: NavParams,
				public toastCtrl: ToastController,
				public recipes: RecipeService) {

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

	public select(item: Recipe): void {
		this.navCtrl.push(RecipeDetailPage, {
			slug: item.slug
		});
	}

	public loadMore(infiniteScroll: any): Subscription {
		return this.recipes.page(++this.page)
			.subscribe((r) => {
				this.items = this.items.concat(r);
				infiniteScroll.complete();
			});
	}

}
