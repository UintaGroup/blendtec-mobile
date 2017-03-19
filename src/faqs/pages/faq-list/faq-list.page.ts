import { Component }                    from '@angular/core';
import { NavController }                from 'ionic-angular';

import { FaqService }                   from '../../providers';
import { Faq, FaqCategory, FaqType }    from '../../models';
import { Observable }                   from 'rxjs';
import { FaqDetailPage }                from '../faq-detail/faq-detail.page';

@Component({
	selector: 'faq-list-page',
	templateUrl: 'faq-list.page.html'
})
export class FaqListPage {

	public items: Observable<Faq[]>;
	public types: Observable<FaqType[]>;
	public categories: Observable<FaqCategory[]>;
	public query: string = '';

	constructor(public navCtrl: NavController, public faqService: FaqService) {
		this.items = faqService.all();
		this.types = faqService.allTypes();
		this.categories = faqService.allCategories();
	}

	public clearSearch(): void {
		this.query = '';
	}

	select(item: Faq): void {
		this.navCtrl.push(FaqDetailPage, {
			id:item.id
		});
	}
}
