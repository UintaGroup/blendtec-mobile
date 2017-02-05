import { NgModule }                 from '@angular/core';
import { HttpModule, JsonpModule }  from '@angular/http';
import { IonicApp, IonicModule }    from 'ionic-angular';


import { TranslateModule} from 'ng2-translate/ng2-translate';
import { RECIPE_PROVIDERS } from './providers';
import { RECIPE_DIRECTIVES } from './directives';
import { RECIPE_PIPES } from './pipes';
import { RECIPE_PAGES} from './pages';

@NgModule({
	imports: [
		HttpModule,
		JsonpModule,
		IonicModule,
		TranslateModule,
	],
	declarations: [RECIPE_PAGES, RECIPE_DIRECTIVES, RECIPE_PIPES],
	bootstrap: [IonicApp],
	entryComponents: RECIPE_PAGES,
	providers: RECIPE_PROVIDERS
})
export class RecipesModule {}
