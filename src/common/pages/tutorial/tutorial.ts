import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from 'ng2-translate/ng2-translate';

export interface Slide {
	title: string;
	description: string;
	image: string;
}

@Component({
	selector: 'page-tutorial',
	templateUrl: 'tutorial.html'
})
export class TutorialPage {
	slides: Slide[];
	showSkip: boolean = true;

	constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService) {
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

	ionViewDidEnter(): void {
		this.menu.enable(false);
	}

	ionViewWillLeave(): void {
		this.menu.enable(true);
	}

}
