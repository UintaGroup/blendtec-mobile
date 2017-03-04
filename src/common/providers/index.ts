import { User }             from './users.service';
import { Api }              from './api.service';
import { SettingsService }  from './settings.service';
import { Items }            from '../mocks/providers/items';
import { DropboxApi }       from "./dropbox-api.service";

export {
	User,
	Api,
	DropboxApi,
	SettingsService,
	Items
};
export const COMMON_PROVIDERS = [
	Api,
	DropboxApi,
	User,
	Items
];
