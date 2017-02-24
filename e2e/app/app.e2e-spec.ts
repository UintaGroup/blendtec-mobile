import { browser, element, by } from 'protractor';

describe('BlendtecApp', () => {

	beforeEach(() => {
		browser.get('');
	});

	it('should set title', () => {
		expect(browser.getTitle()).toEqual('Blendtec Mobile');
	});
});
