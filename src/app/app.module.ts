import { NgModule, ErrorHandler } from '@angular/core';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuPage } from '../pages/menu/menu';

import { User } from '../providers/user';
import { Api } from '../providers/api';
import { Settings } from '../providers/settings';
import { Items } from '../mocks/providers/items';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { BLENDTEC_DIRECTIVES } from '../directives';
import { RecipesModule } from '../recipes/recipes.module';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function provideSettings(storage: Storage) {
	/**
	 * The Settings provider takes a set of default settings for your app.
	 *
	 * You can add new settings options at any time. Once the settings are saved,
	 * these values will not overwrite the saved values (this can be done manually if desired).
	 */
	return new Settings(storage, {
		option1: true,
		option2: 'Ionitron J. Framework',
		option3: '3',
		option4: 'Hello'
	});
}

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages: any[] = [
	MyApp,
	LoginPage,
	SignupPage,
	TutorialPage,
	WelcomePage,
	MenuPage
];

export function declarations() {
	return [
		pages,
		BLENDTEC_DIRECTIVES,
	];
}

export function entryComponents() {
	return pages;
}

export function providers() {
	return [
		Storage,
		User,
		Api,
		Items,
		{provide: Settings, useFactory: provideSettings, deps: [Storage]},
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	];
}

@NgModule({
	declarations: declarations(),
	imports: [
		HttpModule,
		JsonpModule,
		RecipesModule,
		IonicModule.forRoot(MyApp),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: entryComponents(),
	providers: providers()
})
export class AppModule {}
