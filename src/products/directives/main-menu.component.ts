import {Component, Output, EventEmitter}    from '@angular/core';
import {TranslateService}                   from 'ng2-translate';
import { NavItem }                          from '../../common/models';
import { CategoryListPage }                 from '../../products/pages';
import { CategoryDetailPage } from '../pages/category-detail/category-detail.page';

@Component({
	selector: 'product-menu',
	template: `<div>
					<ion-item-divider menuClose color="light" (click)="openRoot()">
						{{'MENU.PRODUCT_HEADER' | translate}}
					</ion-item-divider>
					<button menuClose ion-item *ngFor="let item of menuItems" (click)="openPage(item)">
						{{item.title }}
					</button>
				</div>`,
})
export class MainMenu {

	@Output()
	nav: EventEmitter<NavItem> = new EventEmitter<NavItem>();

	public menuItems: NavItem[] = [];

	constructor(private _translate: TranslateService) {
		this.initTranslations();
	}

	private initTranslations(): void {
		this._translate.get('MENU.BLENDERS')
			.subscribe(value => this.menuItems.push(new NavItem(value, CategoryDetailPage, {slug: 'blenders'})));

		this._translate.get('MENU.JARS')
			.subscribe(value => this.menuItems.push(new NavItem(value, CategoryDetailPage, {slug: 'jars'})));

		this._translate.get('MENU.PRODUCTS_ALL')
			.subscribe(value => this.menuItems.push(new NavItem(value, CategoryListPage)));
	}

	public openPage(item: NavItem): void {
		this.nav.emit(item);
	}

	public openRoot(): void {
		this.nav.emit(new NavItem('', CategoryListPage));
	}
}