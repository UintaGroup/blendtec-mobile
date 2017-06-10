import { Component }				from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

import { CommonEvents }                     from '../../../common/models';
import { Category, Product }                from '../../models';
import { ProductService, CategoryService }  from '../../providers';
import { ProductDetailPage }                from '../product-detail/product-detail.page';

@Component({
	selector: 'page-item-detail',
	templateUrl: './category-detail.page.html'
})
export class CategoryDetailPage {
	public slug: string;
	public category: Category;
	public products: Product[];

	constructor(private _navCtrl: NavController,
				private _events: Events,
				navParams: NavParams,
				productsSrvc: ProductService,
				categorySrvc: CategoryService) {
		this.slug = navParams.get('slug');

		productsSrvc.all(this.slug)
			.subscribe(r => this.products = r);

		categorySrvc.getBySlug(this.slug)
			.then(c => this.category = c);
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'ProductCategoryDetail');
	}

	select(item: Product): void {
		this._navCtrl.push(ProductDetailPage, {
			category: this.category.slug,
			slug: item.slug
		});
	}
}

