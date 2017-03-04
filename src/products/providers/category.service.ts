import { Injectable } from '@angular/core';
import { DropboxApi } from "../../common/providers/dropbox-api.service";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { Response } from "@angular/http";

@Injectable()
export class CategoryService {

	constructor(private _api: DropboxApi) {}

	public all(): Observable<Category[]> {
		return this._api.get('categories')
			.map((r: Response) => {
				return r.json().map(x => new Category(x));
			})
			.catch(() => Observable.throw("No Categories found."));
	}

}