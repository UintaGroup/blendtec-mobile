import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class Api {
	url: string = 'http://example.com';

	constructor(public http: Http) {}

	public get(endpoint: string, params?: any, options?: RequestOptions): Observable<any> {
		if (!options) {
			options = new RequestOptions();
		}

		if (params) {
			let p = new URLSearchParams();
			for (let k in params) {
				p.set(k, params[k]);
			}
			options.search = !options.search && p || options.search;
		}

		return this.http.get(this.url + '/' + endpoint, options);
	}

	public post(endpoint: string, body: any, options?: RequestOptions): Observable<any> {
		return this.http.post(this.url + '/' + endpoint, body, options);
	}

	public put(endpoint: string, body: any, options?: RequestOptions): Observable<any> {
		return this.http.put(this.url + '/' + endpoint, body, options);
	}

	public delete(endpoint: string, body: any, options?: RequestOptions): Observable<any> {
		return this.http.post(this.url + '/' + endpoint, body, options);
	}

	public patch(endpoint: string, body: any, options?: RequestOptions): Observable<any> {
		return this.http.put(this.url + '/' + endpoint, body, options);
	}
}
