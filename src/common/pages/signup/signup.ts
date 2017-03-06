import { Component }                        from '@angular/core';
import { NavController, ToastController }   from 'ionic-angular';
import { TranslateService }                 from 'ng2-translate/ng2-translate';
import { MainPage }                         from '../../../recipes/pages';
import { UserService } from '../../providers';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {
	account: {name: string, email: string, password: string} = {
		name: 'Test Human',
		email: 'test@example.com',
		password: 'test'
	};

	private _signupErrorMsg: string;

	constructor(public navCtrl: NavController,
				public user: UserService,
				public toastCtrl: ToastController,
				public translateService: TranslateService) {

		this.translateService
			.get('SIGNUP_ERROR')
			.subscribe(value => this._signupErrorMsg = value);
	}

	public doSignup(): void {
		this.user.signup(this.account).subscribe(() => this.navCtrl.push(MainPage),
			() => {
			this.navCtrl.push(MainPage);
			let toast = this.toastCtrl.create({
				message: this._signupErrorMsg,
				duration: 3000,
				position: 'top'
			});
			toast.present();
		});
	}
}
