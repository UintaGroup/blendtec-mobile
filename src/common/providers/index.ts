import { UserService }      from './users.service';
import { Api }              from './api.service';
import { SettingsService }  from './settings.service';
import { DropboxApi }       from './dropbox-api.service';
import { BlendtecApi }      from './blendtec-api';
import { LocalDbService }   from './local-db.service';
import { LoggerService }    from './logger.service';

export {
	UserService,
	Api,
	BlendtecApi,
	DropboxApi,
	SettingsService,
	LocalDbService,
	LoggerService
};

export const COMMON_PROVIDERS = [
	Api,
	BlendtecApi,
	DropboxApi,
	UserService,
	LocalDbService,
	LoggerService
];
