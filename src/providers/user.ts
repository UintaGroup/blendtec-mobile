import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class User {
	_user: any;

	constructor(public http: Http, public api: Api) {
	}

	login(accountInfo: any) {
		let seq = this.api.post('login', accountInfo).share();

		seq
			.map(res => res.json())
			.subscribe(res => {
				// If the API returned a successful response, mark the user as logged in
				if (res.status == 'success') {
					this._loggedIn(res);
				} else {
				}
			}, err => {
				console.error('ERROR', err);
			});

		return seq;
	}

	signup(accountInfo: any) {
		let seq = this.api.post('signup', accountInfo).share();

		seq
			.map(res => res.json())
			.subscribe(res => {
				if (res.status == 'success') {
					this._loggedIn(res);
				}
			}, err => {
				console.error('ERROR', err);
			});

		return seq;
	}

	logout() {
		this._user = null;
	}

	_loggedIn(resp) {
		this._user = resp.user;
	}
}
