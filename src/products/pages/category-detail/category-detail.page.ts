import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Category, Product } from '../../models';
import { ProductService } from "../../providers/product.service";
import { ProductDetailPage } from "../product-detail/product-detail.page";

@Component({
	selector: 'page-item-detail',
	templateUrl: './category-detail.page.html'
})
export class CategoryDetailPage {
	public category: Category;
	public products: Product[];

	constructor(public navCtrl: NavController, navParams: NavParams, productsSrvc: ProductService) {
		this.category = navParams.get('category');
		productsSrvc.all(this.category.slug).subscribe(r => this.products = r);

	}

	select(item: Product): void {
		 this.navCtrl.push(ProductDetailPage, {
		 	category: this.category.slug,
		 	slug: item.slug
		 });
	}

}
