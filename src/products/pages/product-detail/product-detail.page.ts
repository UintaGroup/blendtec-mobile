import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductService }           from '../../providers';
import { Product }                  from '../../models';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'product-detail.page.html'
})
export class ProductDetailPage {
	public item: Product;

	constructor(public navCtrl: NavController, navParams: NavParams, productSrvc: ProductService) {
		productSrvc.one(navParams.get('category'), navParams.get('slug'))
			.subscribe(r => this.item = r);
	}

	public buyNow(slug: string): void {
		console.log('REDIRECTING TO', slug);
	}
}
