import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { DropboxApi }   from '../../common/providers';

import { Category }     from '../models';

@Injectable()
export class CategoryService {

	constructor(private _api: DropboxApi) {
	}

	public all(): Observable<Category[]> {
		return this._api.get('categories')
			.map(r => r.json().map(x => new Category(x)))
			.catch(() => Observable.throw('No Categories found.'));
	}

	public getBySlug(slug: string): Promise<Category> {
		return this.all()
			.toPromise()
			.then(cats => cats.find(cat => cat.slug === slug));
	}

}
