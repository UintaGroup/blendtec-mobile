import { NgModule } from '@angular/core';
import { PRODUCT_PROVIDERS } from './providers/index';
import { PRODUCT_PAGES } from './pages/index';
import { HttpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';
import { CommonModule } from '../common/common.module';
import { PRODUCT_DIRECTIVES } from './directives/index';

@NgModule({
	imports: [IonicModule, HttpModule, TranslateModule, CommonModule],
	exports: [PRODUCT_DIRECTIVES],
	declarations: [PRODUCT_PAGES, PRODUCT_DIRECTIVES],
	providers: PRODUCT_PROVIDERS,
	entryComponents: PRODUCT_PAGES
})
export class ProductsModule {
}
