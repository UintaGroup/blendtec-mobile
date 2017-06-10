import { Component } from '@angular/core';
import { Events, MenuController, NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { CommonEvents } from '../../models';
import { WelcomePage } from '../welcome/welcome';

export interface Slide {
	title: string;
	description: string;
	image: string;
}

@Component({
	selector: 'page-tutorial',
	templateUrl: './tutorial.html'
})
export class TutorialPage {
	slides: Slide[];
	showSkip: boolean = true;

	constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, private _events: Events) {
		translate.get(['TUTORIAL_SLIDE1_TITLE',
			'TUTORIAL_SLIDE1_DESCRIPTION',
			'TUTORIAL_SLIDE2_TITLE',
			'TUTORIAL_SLIDE2_DESCRIPTION',
			'TUTORIAL_SLIDE3_TITLE',
			'TUTORIAL_SLIDE3_DESCRIPTION'])
			.subscribe((values) => {
				this.slides = [
					{
						title: values.TUTORIAL_SLIDE1_TITLE,
						description: values.TUTORIAL_SLIDE1_DESCRIPTION,
						image: 'assets/img/engineered_icon.svg',
					},
					{
						title: values.TUTORIAL_SLIDE2_TITLE,
						description: values.TUTORIAL_SLIDE2_DESCRIPTION,
						image: 'assets/img/superior_icon.svg',
					},
					{
						title: values.TUTORIAL_SLIDE3_TITLE,
						description: values.TUTORIAL_SLIDE3_DESCRIPTION,
						image: 'assets/img/warranty_icon.svg',
					}
				];
			});
	}

	startApp(): void {
		this.navCtrl.setRoot(WelcomePage, {}, {
			animate: true,
			direction: 'forward'
		});
	}

	onSlideChangeStart(slider): void {
		this.showSkip = !slider.isEnd;
	}

	public ionViewDidEnter(): void {
		this.menu.enable(false);
		this._events.publish(CommonEvents.pageView, 'Tutorial');
	}

	public ionViewWillLeave(): void {
		this.menu.enable(true);
	}

}
