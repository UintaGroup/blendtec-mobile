import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html'
})
export class MenuPage {
	@ViewChild(Nav) nav: Nav;

	pages: Array<{title: string, component: any}>;

	constructor(public navCtrl: NavController) {
		this.pages = [
			{title: 'Sign in', component: LoginPage},
			{title: 'Signup', component: SignupPage}
		];
	}

	openPage(page): void {
		this.nav.setRoot(page.component);
	}
}
