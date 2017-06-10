import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage }  from './welcome/welcome';
import { ContactPage }  from './contact/contact';
import { ShareModal }   from './share-modal/share.modal';
import { LoginPage }    from './login/login';
import { SignupPage }   from './signup/signup';

/* tslint:disable */
export const FirstRunPage = TutorialPage;
/* tslint:enable */

export {
	TutorialPage,
	ContactPage,
	ShareModal,
	LoginPage,
	WelcomePage,
	SignupPage
}

export const COMMON_PAGES = [
	TutorialPage,
	ContactPage,
	ShareModal,
	LoginPage,
	WelcomePage,
	SignupPage
];
