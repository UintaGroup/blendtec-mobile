import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage }  from './welcome/welcome';
import { ContactPage } from './contact/contact';

/* tslint:disable */
export const FirstRunPage = TutorialPage;
/* tslint:enable */

export {
	TutorialPage,
	WelcomePage,
	ContactPage
}

export const COMMON_PAGES = [
	TutorialPage,
	WelcomePage,
	ContactPage
];
