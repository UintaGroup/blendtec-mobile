import { DropboxApi } from './dropbox-api.service';
import { Response, ResponseOptions } from '@angular/http';
import { inject, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { TestUtils } from '../../test';
import { APP_CONFIG, CONFIG } from '../../app/app.config';

describe('DropboxApi', () => {

	beforeEach(async(() => TestUtils.configureIonicTestingModule([])));

	describe('get', () => {

		let _mockResponseData: any;

		beforeEach(() => {
			_mockResponseData = {};
		});

		it('should return an Observable<Response>',
			inject([DropboxApi, MockBackend, APP_CONFIG], (api: DropboxApi, mockBackend) => {

				mockBackend.connections.subscribe((connection) => {
					connection.mockRespond(new Response(new ResponseOptions({
						body: JSON.stringify(_mockResponseData)
					})));
				});

				api.get('').subscribe(response => {
					expect(response).toBe(_mockResponseData);
				});
			}));

	});

	describe('getUrl', () => {

		let _endpoint: string;

		beforeEach(() => {
			_endpoint = 'myendpoint';
		});

		it('should build url',
			inject([DropboxApi, APP_CONFIG], (api: DropboxApi) => {

				let actual = api.buildUrl(_endpoint);
				expect(actual).toEqual(CONFIG.staticApiUrl + _endpoint + '.json');
			}));
	});
});
