import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { LoginPage, SignupPage } from '../../../auth/pages';
import { CommonEvents } from '../../models/common-events';

@Component({
	selector: 'page-welcome',
	templateUrl: 'welcome.html'
})
export class WelcomePage {

	constructor(public navCtrl: NavController, private _events: Events) {
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'Welcome');
	}

	public login(): void {
		this.navCtrl.push(LoginPage);
	}

	public signup(): void {
		this.navCtrl.push(SignupPage);
	}
}
