import { Component, Inject }        from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser }             from '@ionic-native/in-app-browser';

import { APP_CONFIG, AppConfig }    from '../../../app/app.config';
import { ProductService }           from '../../providers';
import { Product, IProductColor }   from '../../models';

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

	constructor(public navCtrl: NavController,
				public browser: InAppBrowser,
				navParams: NavParams,
				productSrvc: ProductService,
				@Inject(APP_CONFIG) config: AppConfig) {

		this._categoryName = navParams.get('category');
		this._slug = navParams.get('slug');

		productSrvc.one(this._categoryName, this._slug)
			.subscribe(r => {
				this.item = r;
				this.selectColor(r.colors[0]);
				this.pageUrl = `${config.blendtecUrl}${this._categoryName}/${this._slug}`;
			});
	}

	public buyNow(): void {
		this.browser.create(this.pageUrl);
	}

	public selectColor(color: IProductColor): void {
		this.activeColor = color;
	}
}
