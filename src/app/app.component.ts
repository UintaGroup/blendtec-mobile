import { Component, ViewChild }                                 from '@angular/core';
import { Platform, Nav, Loading, LoadingController, Events }	from 'ionic-angular';
import { StatusBar, Splashscreen }                              from 'ionic-native';
import { TranslateService }                                     from 'ng2-translate/ng2-translate';

import { AuthEvents, Session }                                  from '../auth/models';
import { AuthService }                                          from '../auth/providers';
import { LoadingEvents, NavItem, CommonEvents, FirebaseEvents } from '../common/models';
import { FirebaseService }                                      from '../common/providers';
import { FirstRunPage, WelcomePage }                            from '../common/pages';
import { RecipeListPage }                                       from '../recipes/pages';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar padding-left>
			<div class="menu-logo">
				<img src="assets/img/logo.svg" />
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-list>	
			<recipe-menu (nav)="openPage($event)"></recipe-menu>
			<product-menu (nav)="openPage($event)"></product-menu>
			<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
				{{p.title}}
			</button>
			<ion-item-divider color="light">
				{{'MENU.HELP_SUPPORT' | translate}}
			</ion-item-divider>
			<faq-menu (nav)="openPage($event)"></faq-menu>
			<contact-menu (nav)="openPage($event)"></contact-menu>
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

	rootPage: any = FirstRunPage;
	@ViewChild(Nav) nav: Nav;

	private _loading: Loading;

	constructor(translate: TranslateService,
				platform: Platform,
				private _firebaseSrvc: FirebaseService,
				private _events: Events,
				private _loadingCtrl: LoadingController,
				private _authService: AuthService) {

		translate.setDefaultLang('en');
		translate.use('en');

		this.eventRegistration();

		platform.ready()
			.then(() => _firebaseSrvc.logEvent(FirebaseEvents.appStart))
			.then(() => _authService.initializeSession())
			.then(() => {
				StatusBar.styleDefault();
				Splashscreen.hide();
		});
	}

	public eventRegistration(): void {
		this._events.subscribe(LoadingEvents.START, user => this.onLoadingStart(user));
		this._events.subscribe(LoadingEvents.END, () => this.onLoadingEnd());
		this._events.subscribe(AuthEvents.AUTHENTICATED,session => this.onAuthorization(session));
		this._events.subscribe(AuthEvents.LOGOUT, () => this.onLogout());
		this._events.subscribe(CommonEvents.pageView, screenName => this.onPageView(screenName));
	}

	public onAuthorization(session: Session): void {
		this._firebaseSrvc.setUserId(session.userName);
		this._firebaseSrvc.logEvent('Authenticated');
		this.openPage(new NavItem('', RecipeListPage));
	}

	public onLogout(): void {
		this._firebaseSrvc.logEvent(FirebaseEvents.logout);
		this.openPage(new NavItem('', WelcomePage));
	}

	public onPageView(screenName: string): void {
		this._firebaseSrvc.setScreenName(screenName);
	}

	public logout(): void {
		this._authService.logout();
	}

	public openPage(navItem: NavItem): void {
		this.nav.setRoot(navItem.page, navItem.params);
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
			this._loading.dismissAll();
		}
	}
}
