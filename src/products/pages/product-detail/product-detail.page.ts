import { Component, Inject }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductService }           from '../../providers';
import { Product, IProductColor }   from '../../models';
import { APP_CONFIG, AppConfig } from '../../../app/app.config';

@Component({
	selector: 'page-product-detail',
	templateUrl: './product-detail.page.html'
})
export class ProductDetailPage {

	public item: Product;
	public activeColor: IProductColor;
	public pageUrl: string;

	private _categoryName: string;
	private _slug: string;

	constructor(public navCtrl: NavController, navParams: NavParams, productSrvc: ProductService, @Inject(APP_CONFIG) config: AppConfig) {
		this._categoryName = navParams.get('category');
		this._slug = navParams.get('slug');

		productSrvc.one(this._categoryName, this._slug)
			.subscribe(r => {
				this.item = r;
				this.selectColor(r.colors[0]);
				this.pageUrl = `${config.blendtecUrl}${this._categoryName}/${this._slug}`;
				console.log('PAGE URL', this.pageUrl);
			});
	}

	public buyNow(): void {
		console.log('REDIRECTING TO', this.pageUrl);
	}

	public selectColor(color: IProductColor): void {
		this.activeColor = color;
	}
}
