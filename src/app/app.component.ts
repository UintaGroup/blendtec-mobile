import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FirstRunPage } from '../common/pages';
import { LoginPage } from '../common/pages';
import { SignupPage } from '../common/pages';
import { TutorialPage } from '../common/pages';
import { WelcomePage } from '../common/pages';
import { MenuPage } from '../common/pages';
import { EntryPage } from '../recipes/pages';
import { CategoryListPage as ProductCategoriesPage } from '../products/pages';

import { TranslateService } from 'ng2-translate/ng2-translate';
// import { CategoryListPage } from '../products/pages/category-list/category-list.page';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar>
			<ion-title>Edited Pages</ion-title>
				</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-list>
		<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
			{{p.title}}
		</button>
		</ion-list>
	</ion-content>
	</ion-menu>
	<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
	rootPage: any = FirstRunPage;
	// rootPage = CategoryListPage;
	@ViewChild(Nav) nav: Nav;

	pages: any[] = [
		{title: 'Tutorial', component: TutorialPage},
		{title: 'Welcome', component: WelcomePage},
		{title: 'RecipeService', component: EntryPage },
		{title: 'Login', component: LoginPage},
		{title: 'Signup', component: SignupPage},
		{title: 'Menu', component: MenuPage},
		{title: 'Product Categories', component: ProductCategoriesPage },
	];

	constructor(translate: TranslateService, platform: Platform) {
		translate.setDefaultLang('en');
		translate.use('en');

		platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page): void {
		this.nav.setRoot(page.component);
	}
}
