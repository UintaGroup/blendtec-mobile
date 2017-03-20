import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';

import { FaqService }       from '../../providers';
import { Faq }              from '../../models';
import { Observable }       from 'rxjs';
import { FaqDetailPage }    from '../faq-detail/faq-detail.page';

@Component({
	selector: 'page-faq-list',
	templateUrl: 'faq-list.page.html'
})
export class FaqListPage {

	public items: Observable<Faq[]>;
	public query: string = '';

	constructor(public navCtrl: NavController, public faqService: FaqService) {
		this.items = faqService.all();
	}

	public clearSearch(): void {
		this.query = '';
	}

	public select(item: Faq): void {
		this.navCtrl.push(FaqDetailPage, {
			id:item.id
		});
	}
}
