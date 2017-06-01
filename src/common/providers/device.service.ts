import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class DeviceService {
	private _packages: any[] = [
		{target: 'facebook', name: 'com.facebook.katana', platform: 'android'},
		{target: 'facebook', name: 'com.apple.facebook', platform: 'ios'},
		{target: 'facebook', name: '', platform: 'mobileweb'},
		{target: 'twitter', name: 'com.twitter.android', platform: 'android'},
		{target: 'twitter', name: 'com.apple.twitter', platform: 'ios'},
		{target: 'twitter', name: '', platform: 'mobileweb'},
		{target: 'googleplus', name: 'com.google.android.apps.plus', platform: 'android'},
		{target: 'googleplus', name: 'com.apple.google-plus', platform: 'ios'},
		{target: 'googleplus', name: '', platform: 'mobileweb'},
		{target: 'instagram', name: 'com.instagram.android', platform: 'android'},
		{target: 'instagram', name: 'com.apple.instagram', platform: 'ios'},
		{target: 'instagram', name: '', platform: 'mobileweb'},
		{target: 'whatsapp', name: 'com.whatsapp', platform: 'android'},
		{target: 'whatsapp', name: 'com.apple.whatsapp', platform: 'ios'},
		{target: 'whatsapp', name: '', platform: 'mobileweb'},
	];

	constructor(private _platform: Platform, private _socialSharing: SocialSharing) {}

	public currentPlatformOneOf(platforms: string[]): boolean {
		return platforms.find(platform => this._platform.is(platform)) !== undefined;
	}

	public platformName(): string {
		if (this._platform.is('android')) {
			return 'android';
		} else if (this._platform.is('ios')) {
			return 'ios';
		} else if(this._platform.is('mobileweb')) {
			return 'mobileweb';
		}
	}

	public socialPackages(): any[] {
		return this._packages.filter(p=> p.platform === this.platformName());
	}

	public isCordova(): boolean {
		return this._platform.is('cordova');
	}
}