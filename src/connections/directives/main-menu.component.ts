import { Component, Output, EventEmitter }    from '@angular/core';
import { TranslateService }                   from 'ng2-translate';
import { NavItem }                            from '../../common/models';
import { DeviceListPage }                     from '../pages';

@Component({
	selector: 'connections-menu',
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
		this._translate.get('MENU.DEVICES').subscribe(value => {
			this.menuItems.push(
				{
					title: value,
					page: DeviceListPage
				}
			);
		});
	}

	public openPage(item: NavItem): void {
		this.nav.emit(item);
	}
}