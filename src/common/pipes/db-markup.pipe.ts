import { Pipe, PipeTransform }      from '@angular/core';
import { DomSanitizer, SafeHtml }   from '@angular/platform-browser';

@Pipe({
	name: 'dbMarkup'
})

export class DbMarkupPipe implements PipeTransform {

	constructor(private _sanitizer: DomSanitizer) {}

	transform(markup: string, remove?: string): SafeHtml {
		let val = (markup && remove) ? markup.replace(remove, '') : markup ;
		return this._sanitizer.bypassSecurityTrustHtml(val);
	}
}