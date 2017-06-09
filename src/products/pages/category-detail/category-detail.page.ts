import { Component }				from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Category, Product }		from '../../models';
import { ProductService }		   from '../../providers';
import { ProductDetailPage }		from '../product-detail/product-detail.page';
import { CategoryService } from '../../providers/category.service';

@Component({
	selector: 'page-item-detail',
	templateUrl: './category-detail.page.html'
})
export class CategoryDetailPage {
	public slug: string;
	public category: Category;
	public products: Product[];

	constructor(public navCtrl: NavController,
				navParams: NavParams,
				productsSrvc: ProductService,
				categorySrvc: CategoryService) {
		this.slug = navParams.get('slug');

		productsSrvc.all(this.slug)
			.subscribe(r => this.products = r);

		categorySrvc.getBySlug(this.slug)
			.then(c => this.category = c);
	}

	select(item: Product): void {
		this.navCtrl.push(ProductDetailPage, {
			category: this.category.slug,
			slug: item.slug
		});
	}
}

