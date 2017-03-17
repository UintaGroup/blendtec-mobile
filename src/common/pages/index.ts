import { TutorialPage } from './tutorial/tutorial';
import { MenuPage }     from './menu/menu';
import { WelcomePage }  from './welcome/welcome';

/* tslint:disable */
export const FirstRunPage = TutorialPage;
/* tslint:enable */

export {
	MenuPage,
	TutorialPage,
	WelcomePage
}

export const COMMON_PAGES = [
	MenuPage,
	TutorialPage,
	WelcomePage
];
