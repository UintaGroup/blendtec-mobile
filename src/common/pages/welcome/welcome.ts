import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { LoginPage, SignupPage } from '../../pages';
import { CommonEvents }          from '../../models';

@Component({
	selector: 'page-welcome',
	templateUrl: './welcome.html'
})
export class WelcomePage {

	constructor(private _navCtrl: NavController, private _events: Events) {
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'Welcome');
	}

	public login(): void {
		this._navCtrl.push(LoginPage);
	}

	public signup(): void {
		this._navCtrl.push(SignupPage);
	}
}
