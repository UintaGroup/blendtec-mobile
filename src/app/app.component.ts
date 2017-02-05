import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Settings } from '../providers';

//import { FirstRunPage } from '../pages/pages';
//TODO REMOVE THIS
import { EntryPage } from '../recipes/pages';
import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListMasterPage } from '../pages/list-master/list-master';
import { MenuPage } from '../pages/menu/menu';
import { SettingsPage } from '../pages/settings/settings';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar>
			<ion-title>Pages</ion-title>
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
	rootPage = EntryPage;
	@ViewChild(Nav) nav: Nav;

	pages: any[] = [
		{title: 'Tutorial', component: TutorialPage},
		{title: 'Welcome', component: WelcomePage},
		{title: 'Recipes', component: EntryPage },
		{title: 'Cards', component: CardsPage},
		{title: 'Content', component: ContentPage},
		{title: 'Login', component: LoginPage},
		{title: 'Signup', component: SignupPage},
		{title: 'Map', component: MapPage},
		{title: 'Master Detail', component: ListMasterPage},
		{title: 'Menu', component: MenuPage},
		{title: 'Settings', component: SettingsPage},
	];

	constructor(translate: TranslateService, platform: Platform, settings: Settings) {
		translate.setDefaultLang('en');
		translate.use('en');

		platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
