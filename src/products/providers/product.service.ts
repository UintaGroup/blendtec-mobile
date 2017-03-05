import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

import { DropboxApi } from '../../common/providers';
import { Product } from '../models';

@Injectable()
export class ProductService {

	constructor(private _api: DropboxApi) {
	}

	public all(category: string): Observable<Product[]> {
		return this._api.get(category)
			.map((r: Response) => {
				return r.json().map(x => new Product(x));
			})
			.catch(() => Observable.throw('No Categories found.'));
	}

	//TODO - remove category when on real API
	public one(category: string, slug: string): Observable<Product> {
		return this.all(category)
			.map((products: Product[]) => {
				let p = products.find((i: Product) => {
					return i.slug === slug;
				});
				return new Product(p);
			});
	}

}
