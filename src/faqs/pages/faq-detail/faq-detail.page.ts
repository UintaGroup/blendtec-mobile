import { Component }    from '@angular/core';
import { NavParams }    from 'ionic-angular';
import { Observable }   from 'rxjs';

import { FaqService }   from '../../providers';
import { Faq }          from '../../models';

@Component({
	selector: 'page-faq-detail',
	templateUrl: 'faq-detail.page.html'
})
export class FaqDetailPage {
	public item: Observable<Faq>;

	constructor(navParams: NavParams, faqSrvc: FaqService) {
		this.item = faqSrvc.one(navParams.get('id'));
	}

}
