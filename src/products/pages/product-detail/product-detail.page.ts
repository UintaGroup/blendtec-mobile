import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductService }           from '../../providers';
import { Product, IProductColor }   from '../../models';

@Component({
	selector: 'page-product-detail',
	templateUrl: 'product-detail.page.html'
})
export class ProductDetailPage {
	public item: Product;
	public activeColor: IProductColor;

	constructor(public navCtrl: NavController, navParams: NavParams, productSrvc: ProductService) {
		productSrvc.one(navParams.get('category'), navParams.get('slug'))
			.subscribe(r => {
				this.item = r;
				this.selectColor(r.colors[0]);
			});
	}

	public buyNow(slug: string): void {
		console.log('REDIRECTING TO', slug);
	}

	public selectColor(color: IProductColor): void {
		this.activeColor = color;
	}
}
