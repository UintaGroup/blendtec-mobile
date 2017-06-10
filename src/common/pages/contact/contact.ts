import { Component, Inject } from '@angular/core';
import { Events } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { APP_CONFIG, AppConfig } from '../../../app/app.config';
import { Contact, CommonEvents } from '../../models';
import { ContactService } from '../../providers';

declare var window;

@Component({
	selector: 'page-contact',
	templateUrl: './contact.html'
})
export class ContactPage {

	public contact: FormGroup;
	public phone: string;

	constructor(private _contactSrvc: ContactService,
				private _events: Events,
				formBldr: FormBuilder,
				@Inject(APP_CONFIG) config: AppConfig) {

		this.phone = config.customerSupportPhone;
		this.contact = formBldr.group({
			firstName: ['', [Validators.required, Validators.minLength(1)]],
			lastName: ['', Validators.required],
			message: ['', Validators.required],
			email: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
			phone: [''],
			textPreferred: [false]
		});
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'Contact');
	}

	public call(phoneNumber: string): void {
		let num = encodeURIComponent(phoneNumber);
		window.location = `tel:${num}`;
	}

	public onSubmit({value, valid}: { value: Contact, valid: boolean }): Observable<any> {
		if (!valid) return;
		return this._contactSrvc.post(value);
	}
}
