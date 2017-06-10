import { Component }        from '@angular/core';
import { Events, NavController }    from 'ionic-angular';
import { Observable }       from 'rxjs';

import { CommonEvents }     from '../../../common/models';
import { FaqService }       from '../../providers';
import { Faq }              from '../../models';
import { FaqDetailPage }    from '../faq-detail/faq-detail.page';

@Component({
	selector: 'page-faq-list',
	templateUrl: './faq-list.page.html'
})
export class FaqListPage {

	public items: Observable<Faq[]>;
	public query: string = '';

	constructor(private _navCtrl: NavController,  private _events: Events, faqService: FaqService) {
		this.items = faqService.all();
	}

	public ionViewDidEnter(): any {
		this._events.publish(CommonEvents.pageView, 'FaqList');
	}
	public clearSearch(): void {
		this.query = '';
	}

	public select(item: Faq): void {
		this._navCtrl.push(FaqDetailPage, {
			id:item.id
		});
	}
}
