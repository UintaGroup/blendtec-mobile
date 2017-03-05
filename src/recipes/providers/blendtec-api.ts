import { Injectable }                               from '@angular/core';
import { Jsonp, RequestOptions, URLSearchParams }   from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BlendtecApi {
	url: string = 'https://json2jsonp.com/?url=';

	constructor(private _jsonp: Jsonp) {}

	//TODO simplfy when json2jsonp isn't necessary
	public buildUrl(endpoint: string, params?: string): string {
		let tmpUrl = this.url + encodeURIComponent('www.blendtec.com/' + endpoint + '.json');
		if(params) {
			tmpUrl = tmpUrl + '?' +  params;
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
}
