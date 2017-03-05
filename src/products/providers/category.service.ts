import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { DropboxApi } from '../../common/providers/dropbox-api.service';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {

	constructor(private _api: DropboxApi) {}

	public all(): Observable<Category[]> {
		return this._api.get('categories')
			.map((r: Response) => {
				return r.json().map(x => new Category(x));
			})
			.catch(() => Observable.throw('No Categories found.'));
	}

}
