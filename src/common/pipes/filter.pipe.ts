import { Pipe, Injectable } from '@angular/core';

@Pipe({
	name: 'filterBy',
	pure: false
})

@Injectable()
export class FilterPipe {

	private filterByString(filter): any {
		if (filter) {
			filter = filter.toLowerCase();
		}
		return value => {
			let result = !filter || (value ? value.toLowerCase().indexOf(filter) !== -1 : false);
			return result;
		};
	}

	private filterByBoolean(filter): any {
		return value => {
			return Boolean(value) === filter;
		};
	}

	private filterByObject(filter): any {
		return value => {
			let isMatching: boolean = false;
			for (let key in filter) {
				if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
					return false;
				}

				let val = this.getValue(value[key]);
				const type = typeof filter[key];

				if (type === 'boolean') {
					if(this.filterByBoolean(filter[key])(val)) {
						isMatching = true;
					}
				} else if (type === 'string') {
					if (this.filterByString(filter[key])(val) === true) {
						isMatching = true;
					}
				} else if (type === 'object') {
					if(this.filterByObject(filter[key])(val)) {
						isMatching = true;
					}
				} else {
					if(this.filterDefault(filter[key])(val) === true) {
						isMatching = true;
					}
				}
			}

			return isMatching;
		};
	}

	private getValue(value: any): any {
		return typeof value === 'function' ? value() : value;
	}

	private filterDefault(filter): any {
		return value => {
			/* tslint:disable */
			return !filter || filter == value;
			/* tslint:enable */
		};
	}

	private isNumber(value): any {
		return !isNaN(parseInt(value, 10)) && isFinite(value);
	}

	private isObject(value): boolean {
		return typeof value === 'object';
	}

	transform(array: any[], filter: any): any {
		const type = typeof filter;

		if (!array || filter === undefined || filter === '' || filter.length < 1) {
			return array;
		}

		if (type === 'boolean') {
			return array.filter(this.filterByBoolean(filter));
		}

		//TODO - SLOW AS HELL
		if (type === 'string') {
			if (this.isObject(array[0])) {
				return array.filter((item) => {
					let match: boolean = false;
					for (let p in item) {
						if (!item.hasOwnProperty(p)) {
							return;
						}
						if (item[p].indexOf(filter) > -1) {
							match = true;
						}
					}
					return match;
				});
			}

			if (this.isNumber(filter)) {
				return array.filter(this.filterDefault(filter));
			}

			return array.filter(this.filterByString(filter));
		}

		if (type === 'object') {
			return array.filter(this.filterByObject(filter));
		}

		if (type === 'function') {
			return array.filter(filter);
		}

		return array.filter(this.filterDefault(filter));
	}
}