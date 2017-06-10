import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TranslateModule } from 'ng2-translate';
import { CommonModule } from '../common/common.module';

import { PRODUCT_DIRECTIVES } from './directives';
import { PRODUCT_PROVIDERS } from './providers';
import { PRODUCT_PAGES } from './pages';

@NgModule({
	imports: [IonicModule, HttpModule, TranslateModule, CommonModule],
	exports: [PRODUCT_DIRECTIVES],
	declarations: [PRODUCT_PAGES, PRODUCT_DIRECTIVES],
	providers: [PRODUCT_PROVIDERS, InAppBrowser],
	entryComponents: PRODUCT_PAGES
})
export class ProductsModule {
}
