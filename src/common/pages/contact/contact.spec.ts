import { ContactPage } from './contact';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../../providers/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../app/app.config';

describe('ContactPage', () => {

	let _classUnderTest: ContactPage;
	let _formBuilder: FormBuilder;
	let _contactSrvc: ContactService;
	let _config: AppConfig;

	let _phone: string = '1234567';

	beforeEach(() => {
		_formBuilder = jasmine.createSpyObj('formBuilder', ['group']);
		_contactSrvc = jasmine.createSpyObj('contactSrvc', ['post']);
		_config = jasmine.createSpyObj('AppConfig', ['']);
		_config['customerSupportPhone'] = _phone;

		(<jasmine.Spy>(_contactSrvc.post)).and.returnValue(new Observable());

		_classUnderTest = new ContactPage(_formBuilder, _contactSrvc, _config);
	});

	it('should build form', () => {
		expect(_formBuilder.group).toHaveBeenCalled();
	});

	describe('onSubmit', () => {
		it('should return if form invalid', () => {
			_classUnderTest.onSubmit({value: new Contact(), valid: false});
			expect(_contactSrvc.post).not.toHaveBeenCalled();
		});

		it('should post form details to service if valid', () => {
			let formVal = new Contact();
			_classUnderTest.onSubmit({value: formVal, valid: true});

			expect(_contactSrvc.post).toHaveBeenCalledWith(formVal);
		});
	});

});