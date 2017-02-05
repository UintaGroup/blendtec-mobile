import { User }             from './user';
import { Api }              from './api';
import { Settings }         from './settings';
import { Items }            from '../mocks/providers/items';

export {
	User,
	Api,
	Settings,
	Items
};
export const BLENDTEC_PROVIDERS = [
	Api,
	Settings,
	User,
	Items
];
