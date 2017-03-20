import { Injectable, Inject } from '@angular/core';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs';

import { APP_CONFIG, AppConfig } from '../../app/app.config';
import { Api } from './api.service';
import { Contact } from '../models/contact.model';
// import { LoadingEvents } from '../models/loading-events';


@Injectable()
export class ContactService {

	// private _resource: string = 'contact';
	public customerSupportNumber: string;

	constructor(private _api: Api, private _events: Events, @Inject(APP_CONFIG) config: AppConfig) {
		this.customerSupportNumber = config.customerSupportPhone;
	}

	public post(contact: Contact): Observable<any> {
		// this._events.publish(LoadingEvents.START);
		// return this._api.post(this._resource, JSON.stringify(contact))
		// 	.map(() => {
		// 		this._events.publish(LoadingEvents.END);
		// 	});
		return new Observable();
	}

}