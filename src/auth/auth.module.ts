import { NgModule }         from '@angular/core';
import { IonicModule }      from 'ionic-angular';
import { TranslateModule }  from 'ng2-translate';
import { CommonModule }     from '../common/common.module';

import { AUTH_PROVIDERS }   from './providers';

@NgModule({
	imports: [IonicModule, TranslateModule, CommonModule],
	providers: [AUTH_PROVIDERS]
})
export class AuthModule {}
