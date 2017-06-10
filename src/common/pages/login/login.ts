import { Component } from '@angular/core';
import { Events, NavController, ToastController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Credentials } from '../../../auth/models';
import { AuthService } from '../../../auth/providers';
import { CommonEvents } from '../../models/common-events';

@Component({
	selector: 'page-login',
	templateUrl: './login.html'
})
export class LoginPage {

	public credentials: Credentials = {
		username: '',
		password: ''
	};

	private loginErrorString: string;

	constructor(private _navCtrl: NavController,
				private _authSrvc: AuthService,
				private _toastCtrl: ToastController,
				private _events: Events,
				translateSrvc: TranslateService) {

		translateSrvc.get('LOGIN_ERROR')
			.subscribe(value => this.loginErrorString = value);
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'Login');
	}

	public doLogin(): any {
		this._authSrvc
			.login(this.credentials)
			.subscribe(
				() => {
					console.log();
				},
				(err) => {
					let toast = this._toastCtrl.create({
						message: this.loginErrorString,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				});
	}
}
