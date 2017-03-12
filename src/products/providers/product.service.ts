import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Events } from 'ionic-angular';

import { DropboxApi } from '../../common/providers';
import { Product } from '../models';
import { LoadingEvents } from '../../common/models/loading-events';

@Injectable()
export class ProductService {

	constructor(private _api: DropboxApi, private _events: Events) {
	}

	public all(category: string): Observable<Product[]> {

		this._events.publish(LoadingEvents.START);
		return this._api.get(category)
			.map((r: Response) => {
				let data = r.json().map(x => new Product(x));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch((err) => {
				this._events.publish(LoadingEvents.END);
				return Observable.throw('No Products found.');
			});
	}

	//TODO - remove category when on real API
	public one(category: string, slug: string): Observable<Product> {
		return this.all(category)
			.map((products: Product[]) => {
				return products.find((i: Product) => {
					return i.slug === slug;
				});
			});
	}

}
