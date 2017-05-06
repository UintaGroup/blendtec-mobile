import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Observable } from 'rxjs';
import { Platform } from 'ionic-angular';

@Injectable()
export class NetworkService {

	private _cordovaAvailable: boolean = false;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			this._cordovaAvailable = platform.is('cordova');
		});
	}

	public enabled(): boolean {
		if(this._cordovaAvailable === true) {
			return this.connectionType() !== 'none';
		} else {
			return false;
		}
	}

	public onConnect(): any {
		return Network.onConnect();
	}

	public onDisconnect(): any {
		return Network.onDisconnect();
	}

	public connectionType(): string {
		return Network.type;
	}

	public onChange(): any {
		return Network.onchange();
	}
}