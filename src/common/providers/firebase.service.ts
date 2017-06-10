import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var window: any;

@Injectable()
export class FirebaseService {

	private _fb: any;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			this._fb = window.FirebasePlugin;
			if(this._fb) {
				console.log('Firebase Initialized');
			} else {
				console.warn('Firebase Not Found');
			}
		});
	}

	setUserId(userId: string): void {
		if (this._fb) {
			this._fb.setUserId(userId);
		} else {
			console.log(`Firebase UserID: ${userId}`);
		}
	}

	setScreenName(screen: string): void {
		if (this._fb) {
			this._fb.setScreenName(screen);
		} else {
			console.log(`Firebase ScreenName: ${screen}`);
		}
	}

	logEvent(event: string): void {
		if (this._fb) {
			this._fb.logEvent(event);
		} else {
			console.log(`Firebase logEvent: ${event}`);
		}
	}

	logError(message: string): void {
		if(this._fb) {
			this._fb.logError(message);
		} else {
			console.log(`Firebase logEvent: ${event}`);
		}
	}

	getInfo(): Promise<any> {
		if(this._fb) {
			return this._fb.getInfo();
		} else {
			console.log(`Firebase info`);
		}
	}
}