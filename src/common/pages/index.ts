import { TutorialPage } from './tutorial/tutorial';
import { LoginPage } from './login/login';
import { MenuPage } from './menu/menu';
import { SignupPage } from './signup/signup';
import { WelcomePage } from './welcome/welcome';

/* tslint:disable */
export const FirstRunPage = TutorialPage;
/* tslint:enable */

export {
	LoginPage,
	MenuPage,
	SignupPage,
	TutorialPage,
	WelcomePage
}

export const COMMON_PAGES = [
	LoginPage,
	MenuPage,
	SignupPage,
	TutorialPage,
	WelcomePage
];
