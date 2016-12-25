import { Injectable } from '@angular/core';
import { Jsonp, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlendtecApi {
	url: string = 'https://json2jsonp.com/?url=';

	constructor(private _jsonp: Jsonp) {
	}

	private buildUrl(endpoint: string): string {
		return this.url + encodeURIComponent('http://www.blendtec.com/' + endpoint + '.json')
	}

	get(endpoint: string, params?: any, options?: RequestOptions) {
		if (!options) {
			options = new RequestOptions();
		}
		let p = new URLSearchParams();
		p.set('callback', 'JSONP_CALLBACK');
		for (let k in params) {
			p.set(k, params[k]);
		}
		options.search = !options.search && p || options.search;
		return this._jsonp
			.get(this.buildUrl(endpoint), options);
	}
}
