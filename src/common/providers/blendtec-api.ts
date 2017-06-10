import { Injectable, Inject }                       from '@angular/core';
import { Jsonp, RequestOptions, URLSearchParams }   from '@angular/http';
import { Observable }                               from 'rxjs';
import { FirebaseService }                          from './firebase.service';
import 'rxjs/add/operator/map';

import { Events }                   from 'ionic-angular';
import { LoadingEvents }            from '../models';
import { AppConfig, APP_CONFIG }    from '../../app/app.config';

@Injectable()
export class BlendtecApi {
	private _apiUrl: string;
	private _url: string;

	constructor(private _jsonp: Jsonp,
				private _events: Events,
				private _firebaseSrvc: FirebaseService,
				@Inject(APP_CONFIG) config: AppConfig) {
		this._apiUrl = config.blendtecUrl;
		this._url = config.jsonPConverterUrl;
	}

	//TODO simplfy when json2jsonp isn't necessary
	public buildUrl(endpoint: string, params?: string): string {
		let tmpUrl = this._url + '?url=' + encodeURIComponent(this._apiUrl + endpoint + '.json');
		if (params) {
			tmpUrl = tmpUrl + '?' + params;
		}
		return tmpUrl;
	}

	public get(endpoint: string, params?: any, options?: RequestOptions): Observable<any> {
		if (!options) {
			options = new RequestOptions();
		}
		let p = new URLSearchParams();
		for (let k in params) {
			p.set(k, params[k]);
		}
		p.set('callback', 'JSONP_CALLBACK');
		options.search = !options.search && p || options.search;
		return this._jsonp
			.get(this.buildUrl(endpoint, params), options);
	}

	public handleError(message: string): Observable<any> {
		this._firebaseSrvc.logError(message);
		this._events.publish(LoadingEvents.END);
		return Observable.throw(message);
	}
}
