import { BlendtecApi } from './blendtec-api';
import { Jsonp } from '@angular/http';
import { Events } from 'ionic-angular';
import { AppConfig } from '../../app/app.config';

describe('BlendtecApi', () => {

	let _jsonP: Jsonp;
	let _events: Events;
	let _appConfig: AppConfig;
	let _classUnderTest: BlendtecApi;

	describe('buildUrl', () => {

		beforeEach(() => {
			_jsonP = jasmine.createSpyObj('jsonP', ['get']);
			_events = jasmine.createSpyObj('events', ['publish']);
			_appConfig = jasmine.createSpyObj('appConfig', ['blendtecUrl', 'jsonPConverterUrl']);
			_appConfig['blendtecUrl'] = 'bar';
			_appConfig['jsonPConverterUrl'] = 'foo';
			_classUnderTest = new BlendtecApi(_jsonP, _events, _appConfig);
		});

		it('should set blendtec api url', () => {
			expect(_classUnderTest['_apiUrl']).toEqual('bar');
		});

		it('should set jsonPConverter url', () => {
			expect(_classUnderTest['_url']).toEqual('foo');
		});

		it('should return url with endpoint', () => {
			let endpoint = 'abc';
			let actual = _classUnderTest.buildUrl(endpoint);

			expect(actual).toEqual('foo?url=barabc.json');

		});
	});
});