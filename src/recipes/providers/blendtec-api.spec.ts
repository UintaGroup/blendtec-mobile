import { BlendtecApi } from './blendtec-api';
import { Jsonp } from '@angular/http';
import { Events } from 'ionic-angular';

describe('BlendtecApi', () => {

	let _jsonP: Jsonp;
	let _events: Events;
	let _classUnderTest: BlendtecApi;

	describe('buildUrl', () => {

		beforeEach(() => {
			_jsonP = jasmine.createSpyObj('jsonP', ['get']);
			_events = jasmine.createSpyObj('events', ['publish']);
			_classUnderTest = new BlendtecApi(_jsonP, _events);
		});

		it('should return url with endpoint', () => {
			let endpoint = 'abc';
			let actual = _classUnderTest.buildUrl(endpoint);

			expect(actual).toEqual('https://json2jsonp.com/?url=' + encodeURIComponent('www.blendtec.com/abc.json'));

		});
	});
});