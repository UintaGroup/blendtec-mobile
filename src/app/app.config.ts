import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
	appSetting: string;
	staticApiUrl: string;
	blendtecApiUrl: string;
	imageRoot: string;
	jsonPConverterUrl: string;
}

export const CONFIG: AppConfig = {
	appSetting: 'my application nsetting',
	staticApiUrl: 'https://dl.dropboxusercontent.com/u/29534952/api/',
	imageRoot: 'http://cdn.blendtec.com/images/',
	blendtecApiUrl: 'http://www.blendtec.com/',
	jsonPConverterUrl: 'https://json2jsonp.com/'
};
