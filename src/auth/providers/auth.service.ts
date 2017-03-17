import { Injectable }					 from '@angular/core';
import { Events }		from 'ionic-angular';

import { Session, Credentials, Account } from '../models';
import { BlendtecApi } from '../../common/providers/blendtec-api';
import { LocalDbService } from '../../common/providers/local-db.service';
import { AuthEvents } from '../models/auth-events';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

	private _session: Session;
	// private RESOURCE: string = 'login';

	constructor(private _api: BlendtecApi,
				protected _events: Events,
				private _db: LocalDbService) {
	}

	public initializeSession(): Promise<void> {
		return this._db.get('session')
			.then(s => this.doLogin(s));
	}

	public login(credentials: Credentials): Observable<Session> {
		// return this._api.post(this.RESOURCE, JSON.stringify(credentials)
		// ).toPromise().then((response) => {
		// 		let session = JSON.parse(response.headers.get('Authorization'));
		// 		return this.doLogin(session, {sync: true});
		// 	});
		let session: Session = <Session> {
			token: 'abcdefg',
			expiration: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toDateString(),
			userName: credentials.username
		};
		return this.doLogin(session);

	}

	public register(account: Account): Observable<Session> {
		//TODO
		return this.login({
			username: account.username,
			password: account.password
		});

	}

	public logout(): Observable<void> {
		this._events.publish(AuthEvents.LOGOUT);
		return Observable.fromPromise(this._db.set('session', null));
	}

	private doLogin(session: Session): Observable<any> {
		if (session && Object.keys(session).length > 0) {
			this._session = session;
			this._events.publish(AuthEvents.AUTHENTICATED);
			return Observable
				.fromPromise(this._db.set('session', session)
					.then(() => {
						return session;
					}));
		} else {
			this._events.publish(AuthEvents.LOGOUT);
			return this.logout();
		}
	}

	public get session(): Session {
		return this._session;
	}
}