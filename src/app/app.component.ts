import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Loading, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FirstRunPage } from '../common/pages';
import { LoginPage } from '../common/pages';
import { SignupPage } from '../common/pages';
import { TutorialPage } from '../common/pages';
import { WelcomePage } from '../common/pages';
import { EntryPage } from '../recipes/pages';
import { CategoryListPage as ProductCategoriesPage } from '../products/pages';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { Events } from 'ionic-angular';
import { LoadingEvents } from '../common/models/loading-events';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar padding-left>
			<logo></logo>
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
	private _loading: Loading;
	// rootPage: any = FirstRunPage;
	rootPage: any = ProductCategoriesPage;
	@ViewChild(Nav) nav: Nav;

	pages: any[] = [
		{title: 'Products', component: ProductCategoriesPage },
		{title: 'Recipes', component: EntryPage },
		{title: 'Tutorial', component: TutorialPage},
		{title: 'Welcome', component: WelcomePage},
		{title: 'Login', component: LoginPage},
		{title: 'Signup', component: SignupPage}
	];

	constructor(translate: TranslateService, platform: Platform, events: Events, private _loadingCtrl: LoadingController) {
		translate.setDefaultLang('en');
		translate.use('en');

		events.subscribe(LoadingEvents.START, (user) => this.onLoadingStart(user));

		events.subscribe(LoadingEvents.END, () => this.onLoadingEnd());

		platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page): void {
		this.nav.setRoot(page.component);
	}

	private onLoadingStart(message: any): void {
		if(this._loading !== undefined) return;
		this._loading = this._loadingCtrl.create({
			content: message || 'Loading Please Wait...'
		});
		this._loading.onDidDismiss(() => this._loading = undefined);
		this._loading.present();
	}

	private onLoadingEnd(): void {
		if(this._loading !== undefined) {
			this._loading.dismiss();
		}
	}
}
