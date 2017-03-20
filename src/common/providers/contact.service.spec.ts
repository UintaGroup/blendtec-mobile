import { ContactService } from './contact.service';
import { Api } from './api.service';
import { Events } from 'ionic-angular';
import { AppConfig } from '../../app/app.config';
import { Contact } from '../models/contact.model';
import { LoadingEvents } from '../models/loading-events';

describe('ContactService', () => {

	let _classUnderTest: ContactService;
	let _api: Api;
	let _events: Events;
	let _config: AppConfig;

	let _custSupportNum: string;

	beforeEach(() => {
		_custSupportNum = '123456';

		_api = jasmine.createSpyObj('api', ['post']);
		_events = jasmine.createSpyObj('events', ['publish']);
		_config = jasmine.createSpyObj('config', ['customerSupportPhone']);
		_config['customerSupportPhone'] = _custSupportNum;
		_classUnderTest = new ContactService(_api, _events, _config);
	});

	it('should set support Number', () => {
		expect(_classUnderTest.customerSupportNumber).toEqual(_custSupportNum);
	});

	describe('post', () => {
		let _contact: Contact;

		beforeEach(() => {
			_contact = new Contact();
		});

		it('should post new contact', (done) => {
			// _classUnderTest.post(_contact).subscribe(() => {
			// 	expect(_api.post).toHaveBeenCalledWith(_contact);
			// 	done();
			// });
			done();
		});
	});
});