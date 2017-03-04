import { NgModule } from '@angular/core';
import { PRODUCT_PROVIDERS } from "./providers/index";
import { PRODUCT_PAGES } from "./pages/index";
import { HttpModule } from "@angular/http";
import { IonicModule } from "ionic-angular";
import { TranslateModule } from "ng2-translate";


@NgModule({
    imports: [IonicModule, HttpModule, TranslateModule],
    exports: [],
    declarations: PRODUCT_PAGES,
    providers: PRODUCT_PROVIDERS,
    entryComponents: PRODUCT_PAGES
})
export class ProductsModule { }
