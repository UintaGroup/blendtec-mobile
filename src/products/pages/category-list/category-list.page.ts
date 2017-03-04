import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';
import { CategoryService }  from "../../providers";
import { Category }         from "../../models";
import { CategoryDetailPage } from "../category-detail/category-detail.page";

@Component({
	selector: 'product-category-list',
	templateUrl: './category-list.page.html'
})
export class CategoryListPage {

	public items: Category[];
	public residential: boolean = true;

	constructor(public navCtrl: NavController, public categories: CategoryService) {
		this.items = [];
		categories.all().subscribe((r: Category[]) => {
			this.items = r;
		});
	}

	select(item: Category) {
		this.navCtrl.push(CategoryDetailPage, {
			category: item
		});
	}
}
