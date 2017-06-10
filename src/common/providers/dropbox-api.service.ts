import { Injectable, Inject }   from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Events }               from 'ionic-angular';
import { Observable }           from 'rxjs';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig }    from '../../app/app.config';
import { FirebaseService }          from './firebase.service';
import { LoadingEvents }            from '../models';

@Injectable()
export class DropboxApi {

	private _url: string;

	constructor(private http: Http, private _firebaseSrvc: FirebaseService, private _events: Events, @Inject(APP_CONFIG) config: AppConfig) {
		this._url = config.staticApiUrl;
	}

	get(endpoint: string): Observable<Response> {
		return this.http.get(this.buildUrl(endpoint));
	}

	public buildUrl(endpoint: string): string {
		return this._url + endpoint + '.json';
	}

	public handleError(message: string): Observable<any> {
		this._firebaseSrvc.logError(message);
		this._events.publish(LoadingEvents.END);
		return Observable.throw(message);
	}
}
