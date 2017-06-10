import { Component }        from '@angular/core';
import { Events }           from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Account }          from '../../../auth/models';
import { AuthService }      from '../../../auth/providers';

import { CommonEvents }     from '../../models';
import { LogService }       from '../../providers';

@Component({
	selector: 'page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {

	public account: Account = {
		username: 'TDickson',
		email: 'tdickson@gmail.com',
		password: '123456',
		passwordConfirm: '123456'
	};

	private _signupErrorMsg: string;

	constructor(private _authSrvc: AuthService,
				private _events: Events,
				private _logSrvc: LogService,
				translateService: TranslateService) {

		translateService
			.get('SIGNUP_ERROR')
			.subscribe(value => this._signupErrorMsg = value);
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'Signup');
	}

	public doSignup(): void {
		this._authSrvc.register(this.account)
			.catch(err => this._logSrvc.error(this._signupErrorMsg));
	}
}
