import { browser, element, by } from 'protractor';

describe('BlendtecApp', () => {

	beforeEach(() => {
		browser.get('');
	});

	it('should set title', done => {
		browser.getTitle().then((title) => {
			expect(title).toEqual('Blendtec Mobile');
			done();
		});
	});
});
