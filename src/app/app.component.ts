import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SettingsService } from '../common/providers';

//import { FirstRunPage } from '../pages/pages';
//TODO REMOVE THIS
import { EntryPage } from '../recipes/pages';
import { LoginPage } from '../common/pages';
import { SignupPage } from '../common/pages';
import { TutorialPage } from '../common/pages';
import { WelcomePage } from '../common/pages';
import { MenuPage } from '../common/pages';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
	template: `<ion-menu [content]="content">
	<ion-header>
		<ion-toolbar>
			<ion-title>Menu</ion-title>
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
		{title: 'Login', component: LoginPage},
		{title: 'Signup', component: SignupPage},
		{title: 'Menu', component: MenuPage},
	];

	constructor(translate: TranslateService, platform: Platform, settings: SettingsService) {
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
