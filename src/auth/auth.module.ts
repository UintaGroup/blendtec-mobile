import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';
import { BlendtecModule } from '../blendtec/blendtec.module';

import { AUTH_PROVIDERS } from './providers';
import { AUTH_PAGES } from './pages';

@NgModule({
	imports: [IonicModule, TranslateModule, BlendtecModule],
	exports: AUTH_PAGES,
	declarations: AUTH_PAGES,
	providers: [AUTH_PROVIDERS],
	entryComponents: AUTH_PAGES
})
export class AuthModule {}
