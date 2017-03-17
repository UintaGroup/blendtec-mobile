import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage, SignupPage } from '../../../auth/pages';

@Component({
	selector: 'page-welcome',
	templateUrl: 'welcome.html'
})
export class WelcomePage {

	constructor(public navCtrl: NavController) {
	}

	public login(): void {
		this.navCtrl.push(LoginPage);
	}

	public signup(): void {
		this.navCtrl.push(SignupPage);
	}
}
