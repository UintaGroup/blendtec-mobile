import { UserService }      from './users.service';
import { Api }              from './api.service';
import { SettingsService }  from './settings.service';
import { DropboxApi }       from './dropbox-api.service';
import { BlendtecApi }      from './blendtec-api';

export {
	UserService,
	Api,
	BlendtecApi,
	DropboxApi,
	SettingsService
};
export const COMMON_PROVIDERS = [
	Api,
	BlendtecApi,
	DropboxApi,
	UserService
];
