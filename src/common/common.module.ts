import { NgModule, Provider }       from '@angular/core';
import { ReactiveFormsModule }      from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';
import { IonicModule }              from 'ionic-angular';
import { IonicStorageModule, Storage }                  from '@ionic/storage';
import { TranslateModule }          from 'ng2-translate/ng2-translate';
import { AuthModule }               from '../auth/auth.module';

import { COMMON_DIRECTIVES }        from './directives/index';
import { COMMON_PROVIDERS, SettingsService } from './providers';
import { COMMON_PAGES }     from './pages/index';
import { COMMON_PIPES }     from './pipes';
import { BlendtecModule }   from '../blendtec/blendtec.module';

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
		{provide: SettingsService, useFactory: provideSettingsService, deps: [Storage]},
	];
}

@NgModule({
	imports: [
		ReactiveFormsModule,
		IonicModule,
		HttpModule,
		JsonpModule,
		IonicModule,
		IonicStorageModule,
		TranslateModule,
		AuthModule,
		BlendtecModule
	],
	exports: [COMMON_PIPES, COMMON_DIRECTIVES],
	declarations: [COMMON_PAGES, COMMON_PIPES, COMMON_DIRECTIVES],
	entryComponents: [COMMON_PAGES, COMMON_DIRECTIVES],
	providers: providers(),
})
export class CommonModule {
}
