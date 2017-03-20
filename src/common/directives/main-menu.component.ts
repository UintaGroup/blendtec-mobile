import { Component, Output, EventEmitter }  from '@angular/core';
import { TranslateService }                 from 'ng2-translate';
import { NavItem }                          from '../../common/models';
import { ContactPage }                      from '../pages';

@Component({
	selector: 'contact-menu',
	template: `<div>
					<button menuClose ion-item *ngFor="let item of menuItems" (click)="openPage(item)">
						{{item.title }}
					</button>
				</div>`,
})
export class MainMenu {

	@Output()
	nav: EventEmitter<NavItem> = new EventEmitter<NavItem>();

	public menuItems: NavItem[] = [];

	constructor(private _translate: TranslateService) {
		this.initTranslations();
	}

	private initTranslations(): void {
		this._translate.get('MENU.CONTACT_US').subscribe(value => {
			this.menuItems.push(
				{
					title: value,
					page: ContactPage,
				}
			);
		});
	}

	public openPage(item: NavItem): void {
		this.nav.emit(item);
	}
}