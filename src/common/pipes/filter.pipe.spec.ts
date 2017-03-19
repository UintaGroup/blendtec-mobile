/* tslint:disable:no-unused-variable */
import { FilterPipe } from './filter.pipe';

describe('Pipe: FilterPipe', () => {
	let pipe: FilterPipe;

	beforeEach(() => {
		pipe = new FilterPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('filters array of strings', () => {
		expect(pipe.transform(['a', 'b', 'c'], 'a')).toEqual(['a']);
	});

	it('filters array of strings without any match', () => {
		expect(pipe.transform(['a', 'b', 'c'], 'x')).toEqual([]);
	});

	it('filters array of strings with repeated element', () => {
		let arrayContainingA = ['a', 'ba', 'ca'];
		expect(pipe.transform(arrayContainingA, 'a')).toEqual(arrayContainingA);
	});

	it('filters array of numbers', () => {
		expect(pipe.transform([1, 2, 3, 11], 1)).toEqual([1]);
	});

	it('filters array of objects', () => {
		expect(pipe.transform([
			{value: 1},
			{value: 2},
			{value: 3},
			{value: 111}
		], {value: 1})).toEqual([{value: 1}]);

		expect(pipe.transform([
			{value: 'a'},
			{value: 'b'},
			{value: 'c'},
			{value: 'abc'}
		], {value: 'a'})).toEqual([{value: 'a'}, {value: 'abc'}]);
	});

	it('filters array of objects with nested objects', () => {
		let objects = [
			{value: 'a', nested: {number: 1}},
			{value: 'b', nested: {number: 2}},
			{value: 'c', nested: {number: 1}},
			{value: 'abc', nested: {number: 2}}
		];
		expect(pipe.transform(objects , {value: 'a', nested: {number: 2}}))
			.toEqual([objects[0],objects[1],objects[3]]);
	});

	it('filters array of objects with nested objects (not every object has nested object)', () => {
		let objects = [
			{value: 'x'},
			{value: 'a', nested: {number: 1}},
			{value: 'c', nested: {number: 2}},
			{value: 'abc'}
		];
		expect(pipe.transform(objects, {value: 'x', nested: {number: 2}}))
			.toEqual([objects[2]]);
	});

	it('filters array of objects by property matching string value', () => {
		let objects = [
			{
				id: '001',
				name: 'abc',
				company: 'xyz',
			},
			{
				id: '002',
				name: 'def',
				company: 'wex',
			}
		];

		expect(pipe.transform(objects, 'wex')).toEqual([objects[1]]);
	});

	it('filters array of objects by property matching number value', () => {
		let objects = [
			{
				id: '001',
				name: 'abc',
				company: 'xyz',
			},
			{
				id: '002',
				name: 'def',
				company: 'wex',
			}
		];

		expect(pipe.transform(objects, '001')).toEqual([objects[0]]);
	});

	it('filters array of objects with empty array', () => {
		const objects = [
			{
				value: 'a'
			}
		];
		expect(pipe.transform(objects, [])).toEqual(objects);
	});

	it('filters array of objects by property matching number value', () => {

		let objects = [
			{
				id: '001',
				name: 'abc',
				company: 'xyz',
			},
			{
				id: '002',
				name: 'def',
				company: 'abc',
			},
			{
				id: '002',
				name: 'def',
				company: 'xyz',
			}
		];

		expect(pipe.transform(objects,{name: 'abc', company: 'abc' })).toEqual(objects.slice(0,2));
	});

	it('should get value from getter', () => {
		class User {
			firstName: string;
			lastName: string;

			constructor(first: string, last: string) {
				this.firstName = first;
				this.lastName = last;
			}

			get name(): any {
				return `${ this.firstName } ${ this.lastName }`;
			}
		}
		const userA = new User('Abc', '123');
		const objects = [
			userA,
			new User('Qwe', '123')
		];

		expect(pipe.transform(objects, {name: '123'})).toEqual(objects);
		expect(pipe.transform(objects, {name: 'Abc 123'})).toEqual([userA]);
		expect(pipe.transform(objects, {name: 'Qwe123'})).toEqual([]);
	});

	it('should take a function as a filter', () => {
		const objects = [
			{num: 1, nested: {a: 1}},
			{num: 1, nested: {a: 2}},
			{num: 2, nested: {a: 2, b: 'waz'}},
			{num: 2, nested: {a: 2, b: 'was'}}
		];

		const fn = (object: any) => object.num < 2 || object.nested.b === 'was';
		expect(pipe.transform(objects, fn)).toEqual([objects[0], objects[1], objects[3]]);
	});
});