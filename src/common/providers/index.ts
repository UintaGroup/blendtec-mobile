import { User }             from './users.service';
import { Api }              from './api.service';
import { SettingsService }         from './settings.service';
import { Items }            from '../mocks/providers/items';

export {
	User,
	Api,
	SettingsService,
	Items
};
export const COMMON_PROVIDERS = [
	Api,
	User,
	Items
];
