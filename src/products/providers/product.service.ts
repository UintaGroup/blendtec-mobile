import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from 'ionic-angular';

import { DropboxApi}        from '../../common/providers';
import { LoadingEvents }    from '../../common/models';
import { Product }          from '../models';

@Injectable()
export class ProductService {

	constructor(private _api: DropboxApi, private _events: Events) {
	}

	public all(category: string): Observable<Product[]> {

		this._events.publish(LoadingEvents.START);
		return this._api.get(category)
			.map(r => {
				let data = r.json().map(x => new Product(x));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch(() => this._api.handleError('No Products found.'));
	}

	//TODO - remove category when on real API
	public one(category: string, slug: string): Observable<Product> {
		return this.all(category)
			.map(products => products.find(p => p.slug === slug))
			.catch(() => this._api.handleError('No Products found.'));
	}
}
