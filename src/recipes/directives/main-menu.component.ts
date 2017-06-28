import { Component, Output, EventEmitter }  from '@angular/core';
import { TranslateService }                 from 'ng2-translate';
import { NavItem }                          from '../../common/models';
import { RecipeListPage, RecipeCategoryListPage } from '../pages';

@Component({
	selector: 'recipe-menu',
	template: `
		<div>
			<ion-item-divider menuClose color="light" (click)="openRoot()">
				{{'MENU.RECIPE_HEADER' | translate}}
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
		this._translate.get('MENU.SMOOTHIES')
			.subscribe(value => this.menuItems.push(new NavItem(value, RecipeListPage, {slug: 'smoothies'})));

		this._translate.get('MENU.RECIPES_ALL')
			.subscribe(value => this.menuItems.push(new NavItem(value, RecipeCategoryListPage)));
	}

	public openPage(item: NavItem): void {
		this.nav.emit(item);
	}

	public openRoot(): void {
		this.nav.emit(new NavItem('', RecipeListPage));
	}
}