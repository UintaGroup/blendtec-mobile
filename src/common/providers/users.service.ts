import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";

@Injectable()
export class UserService {
	_user: any;

	constructor(public http: Http, public api: Api) {}

	public login(accountInfo: any): Observable<any> {
		return Observable.of(accountInfo).share();
		// return this.api.post('login', accountInfo).share()
		// 	.map(res => res.json())
		// 	.subscribe(res => {
		// 		if (res.status === 'success') {
		// 			this.setUser(res);
		// 		}
		// 	}, err => {
		// 		console.error('ERROR', err);
		// 	});
	}

	public signup(accountInfo: any): Observable<any> {
		return Observable.of(accountInfo).share();
		// return this.api.post('signup', accountInfo).share()
		// 	.map(res => res.json())
		// 	.subscribe(res => {
		// 		if (res.status === 'success') {
		// 			this.setUser(res);
		// 		}
		// 	}, err => {
		// 		console.error('ERROR', err);
		// 	});
	}

	public logout(): void {
		this._user = null;
	}

	private setUser(resp): void {
		this._user = resp.user;
	}
}
