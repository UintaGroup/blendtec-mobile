import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { Contact } from '../../models';
import { ContactService } from '../../providers/contact.service';

declare var window;

@Component({
	selector: 'page-contact',
	templateUrl: './contact.html'
})
export class ContactPage {

	public contact: FormGroup;

	constructor(formBldr: FormBuilder, private _contactSrvc: ContactService) {
		this.contact = formBldr.group({
			firstName: ['', [Validators.required, Validators.minLength(1)]],
			lastName: ['', Validators.required],
			message: ['', Validators.required],
			email: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
			phone: [''],
			textPreferred: [false]
		});
	}

	public call(phoneNumber: string): void {
		window.location = phoneNumber;
	}

	public onSubmit({value, valid}: {value: Contact, valid: boolean}): Observable<any> {
		console.log('SUBMIT', value);
		console.log('VALID', valid);
		if(!valid) return;
		return this._contactSrvc.post(value);
	}
}
