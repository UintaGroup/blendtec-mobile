import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate';

import { BLENDTEC_COMPONENTS } from './directives/index';

@NgModule({
	imports: [IonicModule, TranslateModule],
	exports: BLENDTEC_COMPONENTS,
	declarations: BLENDTEC_COMPONENTS,
	entryComponents: BLENDTEC_COMPONENTS
})
export class BlendtecModule {
}
