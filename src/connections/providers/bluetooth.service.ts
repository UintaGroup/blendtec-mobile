import { Injectable } from '@angular/core';
import { BluetoothSerial } from 'ionic-native';
import { Observable } from 'rxjs';
import { Platform } from 'ionic-angular';

@Injectable()
export class BluetoothService {

	private _cordovaAvailable: boolean = false;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			this._cordovaAvailable = platform.is('cordova');
		});
	}

	public connect(macAddress: string): Observable<any> {
		return BluetoothSerial.connect(macAddress);
	}

	public connectInsecure(macAddress: string): Observable<any> {
		return BluetoothSerial.connectInsecure(macAddress);
	}

	public list(): Promise<any> {
		return BluetoothSerial.list();
	}

	public isEnabled(): Promise<any> {
		if(this._cordovaAvailable === true) {
			return BluetoothSerial.isEnabled();
		} else {
			return Promise.resolve(false);
		}
	}

	public isConnected(): Promise<any> {
		return BluetoothSerial.isConnected();
	}

	public openBlueToothSettings(): Promise<any> {
		return BluetoothSerial.showBluetoothSettings();
	}

	public enable(): Promise<any> {
		return BluetoothSerial.enable();
	}
}