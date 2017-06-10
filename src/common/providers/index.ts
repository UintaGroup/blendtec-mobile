import { Api }              from './api.service';
import { BlendtecApi }      from './blendtec-api';
import { ContactService }   from './contact.service';
import { DropboxApi }       from './dropbox-api.service';
import { DbService }        from './local-db.service';
import { LogService }       from './log.service';
import { SettingsService }  from './settings.service';
import { DeviceService }    from './device.service';
import { FirebaseService }  from './firebase.service';

export {
	Api,
	BlendtecApi,
	DropboxApi,
	SettingsService,
	DbService,
	LogService,
	ContactService,
	DeviceService,
	FirebaseService
};

export const COMMON_PROVIDERS = [
	Api,
	BlendtecApi,
	DropboxApi,
	DbService,
	LogService,
	ContactService,
	DeviceService,
	FirebaseService
];
