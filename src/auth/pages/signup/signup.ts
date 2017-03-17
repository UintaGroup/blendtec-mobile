import { Component }						from '@angular/core';
import { NavController, ToastController }   from 'ionic-angular';
import { TranslateService }				 from 'ng2-translate/ng2-translate';
import { AuthService } from '../../providers/auth.service';
import { Account } from '../../models/account';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {


	public account: Account = {
		username: 'TDickson',
		email: 'tdickson@gmail.com',
		password: '123456',
		passwordConfirm: '123456'
	};

	private _signupErrorMsg: string;

	constructor(public navCtrl: NavController,
				public authSrvc: AuthService,
				public toastCtrl: ToastController,
				public translateService: TranslateService) {

		this.translateService
			.get('SIGNUP_ERROR')
			.subscribe(value => this._signupErrorMsg = value);
	}

	public doSignup(): void {
		this.authSrvc
			.register(this.account)
			.subscribe(
				() => {},
				() => {
					let toast = this.toastCtrl.create({
						message: this._signupErrorMsg,
						duration: 3000,
						position: 'top'
					});
					toast.present();
				});
	}
}
