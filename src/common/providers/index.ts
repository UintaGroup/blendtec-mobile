import { UserService }             from './users.service';
import { Api }              from './api.service';
import { SettingsService }  from './settings.service';
import { DropboxApi }       from './dropbox-api.service';

export {
	UserService,
	Api,
	DropboxApi,
	SettingsService
};
export const COMMON_PROVIDERS = [
	Api,
	DropboxApi,
	UserService
];
