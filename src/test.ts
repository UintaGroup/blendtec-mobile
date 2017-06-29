import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {
	App,
	Config,
	Form,
	IonicModule,
	Keyboard,
	DomController,
	MenuController,
	NavController,
	Platform, GestureController, Events
} from 'ionic-angular';
import { ConfigMock, FirebaseServiceMock, TranslatePipeMock, TranslateServiceMock }               from './mocks';
import { MockBackend }              from '@angular/http/testing';
import { XHRBackend, HttpModule }   from '@angular/http';
import { DropboxApi }               from './common/providers/dropbox-api.service';
import { CONFIG, APP_CONFIG }       from './app/app.config';
import { NavControllerMock }        from 'ionic-mocks';
import { RecipeCategoryService }    from './recipes/providers/recipe-category.service';
import { TranslateModule, TranslateService }        from 'ng2-translate';
import { PlatformMock, RecipeCategoryServiceMock }  from './mocks';
import { FirebaseService } from './common/providers/firebase.service';
import { EventsMock } from 'ionic-mocks/dist';

declare let __karma__: any;
declare let require: any;

__karma__.loaded = function (): void {
	//Empty
};

getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting(),
);

const context: any = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);

__karma__.start();

export class TestUtils {

	public static beforeEachCompiler(components: Array<any>): Promise<{fixture: any, instance: any}> {
		return TestUtils.configureIonicTestingModule(components)
			.compileComponents().then(() => {
				let fixture: any = TestBed.createComponent(components[0]);
				return {
					fixture: fixture,
					instance: fixture.debugElement.componentInstance,
				};
			});
	}

	public static configureIonicTestingModule(components: Array<any>): typeof TestBed {
		return TestBed.configureTestingModule({
			declarations: [
				...components,
				TranslatePipeMock
			],
			providers: [
				MockBackend,
				App, Form, Keyboard, DomController, MenuController, GestureController,
				{provide: Platform, useClass: PlatformMock},
				{provide: NavController, useClass: NavControllerMock.instance()},
				{provide: Config, useClass: ConfigMock},
				{provide: TranslateService, useClass: TranslateServiceMock},
				DropboxApi,
				{provide: XHRBackend, useClass: MockBackend},
				{provide: APP_CONFIG, useValue: CONFIG},
				{provide: Events, useValue: EventsMock.instance()},
				{provide: RecipeCategoryService, useValue: RecipeCategoryServiceMock.instance()},
				{provide: FirebaseService, useValue: FirebaseServiceMock.instance()}
			],
			imports: [
				HttpModule,
				FormsModule,
				IonicModule,
				TranslateModule,
				ReactiveFormsModule,
			],
		});
	}

	// http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
	public static eventFire(el: any, etype: string): void {
		if (el.fireEvent) {
			el.fireEvent('on' + etype);
		} else {
			let evObj: any = document.createEvent('Events');
			evObj.initEvent(etype, true, false);
			el.dispatchEvent(evObj);
		}
	}
}
