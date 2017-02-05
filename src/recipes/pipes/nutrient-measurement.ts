import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nutrient'})
export class NutrientMeasurementPipe implements PipeTransform {
	transform(amount: number, args: string[]): any {
		if (!amount) return amount;
		let t: number = amount;
		let m: string = 'mg';

		if(amount >= 1000) {
			t = amount / 1000;
			m = 'g';
		}

		return `${t}${m}`;
	}
}
