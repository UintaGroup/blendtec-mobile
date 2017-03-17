import { NgModule }                 from '@angular/core';
import { HttpModule, JsonpModule }  from '@angular/http';
import { IonicModule }    from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { CommonModule } from '../common/common.module';

import { RECIPE_PROVIDERS } from './providers';
import { RECIPE_DIRECTIVES } from './directives';
import { RECIPE_PIPES } from './pipes';
import { RECIPE_PAGES } from './pages';

@NgModule({
	imports: [
		HttpModule,
		JsonpModule,
		IonicModule,
		TranslateModule,
		CommonModule
	],
	exports: [RECIPE_DIRECTIVES],
	declarations: [RECIPE_PAGES, RECIPE_DIRECTIVES, RECIPE_PIPES],
	entryComponents: [RECIPE_PAGES],
	providers: RECIPE_PROVIDERS
})
export class RecipeServiceModule {
}
