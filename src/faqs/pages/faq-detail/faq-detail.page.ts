import { Component }    from '@angular/core';
import { Events, NavParams }    from 'ionic-angular';
import { Observable }   from 'rxjs';

import { CommonEvents } from '../../../common/models';
import { FaqService }   from '../../providers';
import { Faq }          from '../../models';

@Component({
	selector: 'page-faq-detail',
	templateUrl: 'faq-detail.page.html'
})
export class FaqDetailPage {
	public item: Observable<Faq>;

	constructor(navParams: NavParams, faqSrvc: FaqService, private _events: Events) {
		this.item = faqSrvc.one(navParams.get('id'));
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'FAQ Detail');
	}

}
