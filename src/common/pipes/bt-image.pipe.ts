import { Pipe, PipeTransform, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { APP_CONFIG, AppConfig } from '../../app/app.config';

@Pipe({
	name: 'btImg'
})

export class BlendtecImagePipe implements PipeTransform {

	private _imgRoot: string;

	constructor(private _sanitizer: DomSanitizer, @Inject(APP_CONFIG) config: AppConfig) {
		this._imgRoot = config.imageRoot;
	}

	transform(path: string): SafeResourceUrl {
		return this._sanitizer.bypassSecurityTrustResourceUrl(this._imgRoot + path);
	}
}