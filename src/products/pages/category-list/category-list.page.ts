import { Component }             from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { CommonEvents }         from '../../../common/models';
import { CategoryService }      from '../../providers';
import { Category }             from '../../models';
import { CategoryDetailPage }   from '../category-detail/category-detail.page';

@Component({
	selector: 'product-category-list',
	templateUrl: './category-list.page.html'
})
export class CategoryListPage {

	public items: Category[] = [];
	public residential: boolean = true;

	constructor(private _navCtrl: NavController, private _events: Events, categorySrvc: CategoryService) {
		categorySrvc.all()
			.subscribe(r => this.items = r);
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'ProductCategoryList');
	}

	public select(item: Category): void {
		this._navCtrl.push(CategoryDetailPage, {
			slug: item.slug
		});
	}
}
