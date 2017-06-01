import { Injectable }                     from '@angular/core';
import { Events }        from 'ionic-angular';

import { Session, Credentials, Account } from '../models';
import { BlendtecApi } from '../../common/providers/blendtec-api';
import { DbService } from '../../common/providers/local-db.service';
import { AuthEvents } from '../models/auth-events';
import { Observable } from 'rxjs';

const sessionKey: string = 'session';
// const resourceKey: string = 'login';

@Injectable()
export class AuthService {

	constructor(private _api: BlendtecApi, protected _events: Events, private _db: DbService) {}

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
		return this.login({
			username: account.username,
			password: account.password
		});
	}

	public logout(): Observable<void> {
		let promise = this.getSession().then(session => {
			this._events.publish(AuthEvents.LOGOUT, session);
			return this._db.clear();
			// return this._db.remove(sessionKey);
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