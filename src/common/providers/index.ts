import { Api }              from './api.service';
import { BlendtecApi }      from './blendtec-api';
import { ContactService }   from './contact.service';
import { DbConfig }         from './db.config';
import { DropboxApi }       from './dropbox-api.service';
import { LocalDbService }   from './local-db.service';
import { LoggerService }    from './logger.service';
import { SettingsService }  from './settings.service';

export {
	Api,
	BlendtecApi,
	DropboxApi,
	SettingsService,
	LocalDbService,
	LoggerService,
	ContactService
};

export const COMMON_PROVIDERS = [
	Api,
	BlendtecApi,
	DropboxApi,
	LocalDbService,
	LoggerService,
	ContactService
];
