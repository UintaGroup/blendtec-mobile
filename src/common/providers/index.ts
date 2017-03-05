import { User }             from './users.service';
import { Api }              from './api.service';
import { SettingsService }  from './settings.service';
import { DropboxApi }       from './dropbox-api.service';

export {
	User,
	Api,
	DropboxApi,
	SettingsService
};
export const COMMON_PROVIDERS = [
	Api,
	DropboxApi,
	User
];
