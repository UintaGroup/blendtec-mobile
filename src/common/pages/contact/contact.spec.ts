import { Events } from 'ionic-angular';
import { EventsMock } from 'ionic-mocks';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../../providers/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../app/app.config';

import { ContactPage } from './contact';

describe('ContactPage', () => {

	let contactSrvc: ContactService;
	let events; Events;
	let formBuilder: FormBuilder;
	let config: AppConfig;

	let classUnderTest: ContactPage;

	let _phone: string = '1234567';

	beforeEach(() => {
		contactSrvc = jasmine.createSpyObj('contactSrvc', ['post']);
		contactSrvc.post.and.returnValue(new Observable());
		events = EventsMock.instance();
		formBuilder = jasmine.createSpyObj('formBuilder', ['group']);
		config = jasmine.createSpyObj('AppConfig', ['']);
		config['customerSupportPhone'] = _phone;

		classUnderTest = new ContactPage(contactSrvc, events, formBuilder, config);
	});

	it('should build form', () => {
		expect(formBuilder.group).toHaveBeenCalled();
	});

	describe('onSubmit', () => {
		it('should return if form invalid', () => {
			classUnderTest.onSubmit({value: new Contact(), valid: false});
			expect(contactSrvc.post).not.toHaveBeenCalled();
		});

		it('should post form details to service if valid', () => {
			let formVal = new Contact();
			classUnderTest.onSubmit({value: formVal, valid: true});

			expect(contactSrvc.post).toHaveBeenCalledWith(formVal);
		});
	});

});