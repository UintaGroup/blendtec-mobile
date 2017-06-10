import { BlendtecApi } from './blendtec-api';
import { Jsonp } from '@angular/http';
import { Events } from 'ionic-angular';
import { EventsMock } from 'ionic-mocks';
import { AppConfig } from '../../app/app.config';
import { FirebaseService } from './firebase.service';

describe('BlendtecApi', () => {

	let jsonp: Jsonp;
	let events: Events;
	let firebaseSrvc: FirebaseService;
	let appConfig: AppConfig;

	let classUnderTest: BlendtecApi;

	describe('buildUrl', () => {

		beforeEach(() => {
			jsonp = jasmine.createSpyObj('jsonP', ['get']);
			events = EventsMock.instance();
			firebaseSrvc = jasmine.createSpyObj('FireBaseService', ['logError']);
			appConfig = jasmine.createSpyObj('appConfig', ['blendtecUrl', 'jsonPConverterUrl']);
			appConfig['blendtecUrl'] = 'bar';
			appConfig['jsonPConverterUrl'] = 'foo';
			classUnderTest = new BlendtecApi(jsonp, events, firebaseSrvc, appConfig);
		});

		it('should set blendtec api url', () => {
			expect(classUnderTest['_apiUrl']).toEqual('bar');
		});

		it('should set jsonPConverter url', () => {
			expect(classUnderTest['_url']).toEqual('foo');
		});

		it('should return url with endpoint', () => {
			let endpoint = 'abc';
			let actual = classUnderTest.buildUrl(endpoint);

			expect(actual).toEqual('foo?url=barabc.json');

		});
	});
});