import { Injectable } from '@angular/core';
import { Events }     from 'ionic-angular';
import { Observable } from 'rxjs';

import { FirebaseEvents }                               from '../../common/models';
import { DbService, BlendtecApi, FirebaseService }      from '../../common/providers';
import { Session, Credentials, Account, AuthEvents }    from '../models';

const sessionKey: string = 'session';
// const resourceKey: string = 'login';

@Injectable()
export class AuthService {

	constructor(private _api: BlendtecApi,
				private _events: Events,
				private _db: DbService,
				private _fireBaseSrvc: FirebaseService) {
	}

	public initializeSession(): Promise<void> {
		return this._db.get(sessionKey)
			.then(s => this.onLogin(s));
	}

	public login(credentials: Credentials): Observable<Session> {
		// return this._api.post(resourceKey, JSON.stringify(credentials)
		// ).map(response => {
		// 		let session = JSON.parse(response.headers.get('Authorization'));
		// 		return this.onLogin(session, {sync: true});
		// 	});
		let session: Session = <Session> {
			token: 'abcdefg',
			expiration: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toDateString(),
			userName: credentials.username
		};
		return Observable.fromPromise(this.onLogin(session));

	}

	public register(account: Account): Observable<Session> {
		this._fireBaseSrvc.logEvent(FirebaseEvents.register);
		return this.login({
			username: account.username,
			password: account.password
		});
	}

	public logout(): Observable<void> {
		let promise = this.getSession().then(session => {
			this._events.publish(AuthEvents.LOGOUT, session);
			return this._db.remove(sessionKey);
		});

		return Observable.fromPromise(promise);
	}

	private onLogin(session: Session): Promise<any> {
		if (session && Object.keys(session).length > 0) {
			this._events.publish(AuthEvents.AUTHENTICATED, session);
			return this.setSession(session);
		} else {
			this._events.publish(AuthEvents.LOGOUT);
			return this.logout().toPromise();
		}
	}

	public setSession(session: Session): Promise<void> {
		return this._db.set(sessionKey, session);
	}

	public getSession(): Promise<Session> {
		return this._db.get(sessionKey);
	}
}