import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cooktime'})
export class CookTimePipe implements PipeTransform {
	transform(seconds: number, args: string[]): any {
		if (!seconds) return '--';
		let time = new Date(0, 0, 0, 0, 0, seconds);
		let m: string = 'Sec';
		let t: number = time.getSeconds();

		if(time.getHours() > 0) {
			t = time.getHours();
			m = 'Hr';
		} else if (time.getMinutes() > 0) {
			t = time.getMinutes();
			m = 'Min';
		}

		return `${t}  ${m}${t>1 ? 's' : ''}`;
	}
}
