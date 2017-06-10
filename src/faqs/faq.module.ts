import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';
import { CommonModule as BtCommonModule } from '../common/common.module';

import { FAQ_DIRECTIVES } from './directives';
import { FAQ_PROVIDERS } from './providers';
import { FAQ_PAGES } from './pages';

@NgModule({
	imports: [IonicModule, HttpModule, TranslateModule, BtCommonModule, CommonModule],
	exports: [FAQ_DIRECTIVES],
	declarations: [FAQ_PAGES, FAQ_DIRECTIVES],
	providers: FAQ_PROVIDERS,
	entryComponents: FAQ_PAGES
})
export class FaqModule {
}
