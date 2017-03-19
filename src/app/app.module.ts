import { NgModule, ErrorHandler } from '@angular/core';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { MyApp } from './app.component';
import { RecipeServiceModule } from '../recipes/recipes.module';
import { ProductsModule } from '../products/products.module';
import { CommonModule } from '../common/common.module';
import { APP_CONFIG, CONFIG } from './app.config';
import { ConnectionsModule } from '../connections/connections.module';
import { AuthModule } from '../auth/auth.module';
import { BlendtecModule } from '../blendtec/blendtec.module';
import { FaqModule } from '../faqs/faq.module';

export function createTranslateLoader(http: Http): TranslateStaticLoader {
	'use strict';
	return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function providers(): any[] {
	'use strict';
	return [
		Storage,
		{provide: APP_CONFIG, useValue: CONFIG},
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	];
}

@NgModule({
	declarations: [MyApp],
	imports: [
		HttpModule,
		JsonpModule,
		AuthModule,
		BlendtecModule,
		CommonModule,
		FaqModule,
		RecipeServiceModule,
		ProductsModule,
		ConnectionsModule,
		IonicModule.forRoot(MyApp),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [MyApp],
	providers: providers()
})
export class AppModule {}
