import { ComponentFixture, async }  from '@angular/core/testing';
import { TestUtils }                from '../../test';
import { BlendtecButton }           from "./bt-button.component";

let fixture: ComponentFixture<BlendtecButton> = null;
let instance: any = null;

describe('BlendtecButton', () => {

	beforeEach(async(() => TestUtils.beforeEachCompiler([BlendtecButton]).then(compiled => {
		fixture = compiled.fixture;
		instance = compiled.instance;
	})));

	it('should create the Blendtec Button', async(() => {
		expect(instance).toBeTruthy();
	}));
});