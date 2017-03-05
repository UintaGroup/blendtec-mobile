import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { MainPage } from '../../../recipes/pages';
import { User } from '../../providers';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	account: {email: string, password: string} = {
		email: 'test@example.com',
		password: 'test'
	};

	private loginErrorString: string;

	constructor(public navCtrl: NavController,
				public user: User,
				public toastCtrl: ToastController,
				public translateService: TranslateService) {

		this.translateService
			.get('LOGIN_ERROR')
			.subscribe(value => this.loginErrorString = value);
	}

	doLogin(): void {
		this.user
			.login(this.account)
			.subscribe(
				() => this.navCtrl.push(MainPage),
				() => {
					this.navCtrl.push(MainPage);
					let toast = this.toastCtrl.create({
						message: this.loginErrorString,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				});
	}
}
