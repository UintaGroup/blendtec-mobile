import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';
import { CommonModule } from '../common/common.module';

import { CONNECTION_PROVIDERS } from './providers';
import { CONNECTION_PAGES } from './pages';
import { CONNECTION_DIRECTIVES } from './directives';
@NgModule({
	imports: [IonicModule, TranslateModule, CommonModule],
	exports: [CONNECTION_DIRECTIVES],
	declarations: [CONNECTION_PAGES, CONNECTION_DIRECTIVES],
	providers: CONNECTION_PROVIDERS,
	entryComponents: CONNECTION_PAGES
})
export class ConnectionsModule {
}
