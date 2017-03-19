import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Events } from 'ionic-angular';

import { DropboxApi } from '../../common/providers';
import { LoadingEvents } from '../../common/models/loading-events';
import { Faq } from '../models';
import { FaqCategory } from '../models/faq-category.model';
import { FaqType } from '../models/faq-type.model';

@Injectable()
export class FaqService {

	constructor(private _api: DropboxApi, private _events: Events) {}

	public all(): Observable<Faq[]> {

		this._events.publish(LoadingEvents.START);
		return this._api.get('faqs')
			.map((r: Response) => {
				let data = r.json().map(x => new Faq(x));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch((err) => {
				console.log('ERROR', err);
				this._events.publish(LoadingEvents.END);
				return Observable.throw('No Faqs found.');
			});
	}

	public allCategories(): Observable<FaqCategory[]> {

		this._events.publish(LoadingEvents.START);
		return this._api.get('faq-categories')
			.map((r: Response) => {
				let data = r.json().map(x => new FaqCategory(x));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch((err) => {
				this._events.publish(LoadingEvents.END);
				return Observable.throw('No Faqs found.');
			});
	}

	public allTypes(): Observable<FaqType[]> {

		this._events.publish(LoadingEvents.START);
		return this._api.get('faq-categories')
			.map((r: Response) => {
				let data = r.json().map(x => new FaqType(x));
				this._events.publish(LoadingEvents.END);
				return data;
			})
			.catch((err) => {
				this._events.publish(LoadingEvents.END);
				return Observable.throw('No Faqs found.');
			});
	}

	public one(id: string): Observable<Faq> {
		//TODO - fix when on real API
		return this.all()
			.map((products: Faq[]) => {
				return products.find((i: Faq) => {
					return i.id === id;
				});
			});
	}

}