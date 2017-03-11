import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeHtml, SafeResourceUrl }   from '@angular/platform-browser';

import { ProductService }           from '../../providers';
import { Product }                  from '../../models';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'product-detail.page.html'
})
export class ProductDetailPage {
	public item: Product;
	public primaryImage: SafeResourceUrl;
	public features: SafeHtml;

	constructor(public navCtrl: NavController, navParams: NavParams, productSrvc: ProductService, private _domSanitizer: DomSanitizer) {
		productSrvc.one(navParams.get('category'), navParams.get('slug'))
			.subscribe(r => {
				this.item = r;
				this.primaryImage = _domSanitizer.bypassSecurityTrustResourceUrl('http://cdn.blendtec.com/'+ r.primaryImage);
				this.features = _domSanitizer.bypassSecurityTrustHtml(r.features);
			});
	}

	public buyNow(slug: string): void {
		console.log('REDIRECTING TO', slug);
	}
}
