import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage }  from './welcome/welcome';
import { ContactPage } from './contact/contact';
import { ShareModal } from './share-modal/share.modal';

/* tslint:disable */
export const FirstRunPage = TutorialPage;
/* tslint:enable */

export {
	TutorialPage,
	WelcomePage,
	ContactPage,
	ShareModal
}

export const COMMON_PAGES = [
	TutorialPage,
	WelcomePage,
	ContactPage,
	ShareModal
];
