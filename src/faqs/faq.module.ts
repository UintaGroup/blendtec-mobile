import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';
import { CommonModule } from '../common/common.module';
import { BlendtecModule } from '../blendtec/blendtec.module';

import { FAQ_DIRECTIVES } from './directives';
import { FAQ_PROVIDERS } from './providers';
import { FAQ_PAGES } from './pages';

@NgModule({
	imports: [IonicModule, HttpModule, TranslateModule, CommonModule, BlendtecModule],
	exports: [FAQ_DIRECTIVES],
	declarations: [FAQ_PAGES, FAQ_DIRECTIVES],
	providers: FAQ_PROVIDERS,
	entryComponents: FAQ_PAGES
})
export class FaqModule {
}
