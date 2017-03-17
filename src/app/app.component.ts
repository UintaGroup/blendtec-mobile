import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Loading, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { WelcomePage } from '../common/pages';
import { CategoryListPage as ProductCategoriesPage } from '../products/pages';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { Events } from 'ionic-angular';
import { LoadingEvents } from '../common/models/loading-events';
import { NavItem } from '../common/models/nav-item';
import { UserService } from '../common/providers/users.service';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar padding-left>
			<logo></logo>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-list>	
			<product-menu (nav)="openPage($event)"></product-menu>
			<recipe-menu (nav)="openPage($event)"></recipe-menu>
			<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
				{{p.title}}
			</button>
			<ion-item-divider color="light">
				{{'MENU.MY_BLENDTEC' | translate}}
			</ion-item-divider>
			<connections-menu (nav)="openPage($event)"></connections-menu>
			<ion-footer>
				<button menuClose ion-item (click)="logout()">
					Logout
				</button>
			</ion-footer>
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

	constructor(translate: TranslateService, platform: Platform, events: Events, private _loadingCtrl: LoadingController, private _usersService: UserService) {
		translate.setDefaultLang('en');
		translate.use('en');

		events.subscribe(LoadingEvents.START, (user) => this.onLoadingStart(user));

		events.subscribe(LoadingEvents.END, () => this.onLoadingEnd());

		platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	public openPage(navItem: NavItem): void {
		this.nav.setRoot(navItem.page);
	}

	public logout(): void {
		this._usersService.logout();
		return this.openPage({title: '', page: WelcomePage});
	}

	private onLoadingStart(message: any): void {
		if (this._loading !== undefined) return;
		this._loading = this._loadingCtrl.create({
			content: message || 'Loading Please Wait...'
		});
		this._loading.onDidDismiss(() => this._loading = undefined);
		this._loading.present();
	}

	private onLoadingEnd(): void {
		if (this._loading !== undefined) {
			this._loading.dismiss();
		}
	}
}
