import { ApiEntity } from './api-entity';

export class TestApiEntity extends ApiEntity {

	private _propOne: string;
	public get propOne(): string {
		return this._propOne;
	}

	private _propTwo: number;
	public get propTwo(): number {
		return this._propTwo;
	}

	private _propThree: boolean;
	public get propThree(): boolean {
		return this._propThree;
	}
}
describe('ApiEntity', () => {

	let _apiData: Object;
	let _classUnderTest: TestApiEntity;

	beforeEach(() => {
		_apiData = {
			propOne: 'value1',
			propTwo: 5,
			propThree: true
		};

	});

	it('should map api data to properties', () => {
		_classUnderTest = new TestApiEntity(_apiData);

		//expect(_classUnderTest.propOne).toBe('value1');
		//expect(_classUnderTest.propTwo).toBe(5);
		//expect(_classUnderTest.propThree).toBe(true);
	});
});
