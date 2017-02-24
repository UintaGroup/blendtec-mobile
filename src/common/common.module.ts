import { NgModule, Provider }       from '@angular/core';
import { HttpModule, JsonpModule }  from '@angular/http';
import { IonicModule }    from 'ionic-angular';
import { Storage }                  from '@ionic/storage';

import { TranslateModule }                  from 'ng2-translate/ng2-translate';

import { SettingsService, COMMON_PROVIDERS } from './providers';
import { COMMON_PAGES }                      from './pages/index';
import { COMMON_DIRECTIVES } from './directives/index';

export function provideSettingsService(storage: Storage): SettingsService {
	'use strict';
	return new SettingsService(storage, {
		option1: true,
		option2: 'Ionitron J. Framework',
		option3: '3',
		option4: 'Hello'
	});
}

export function providers(): Provider[] {
	'use strict';
	return [
		COMMON_PROVIDERS,
		Storage,
		{provide: SettingsService, useFactory: provideSettingsService, deps: [Storage]},
	];
}

@NgModule({
	imports: [
		IonicModule,
		HttpModule,
		JsonpModule,
		IonicModule,
		TranslateModule,
	],
	declarations: [COMMON_PAGES, COMMON_DIRECTIVES],
	entryComponents: [COMMON_PAGES, COMMON_DIRECTIVES],
	providers: providers(),
})
export class CommonModule {
}
