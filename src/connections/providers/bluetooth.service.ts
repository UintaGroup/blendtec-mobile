import { Injectable } from '@angular/core';
import { BluetoothSerial } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Injectable()
export class BluetoothService {

	private _isCordova: boolean = false;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			this._isCordova = platform.is('cordova');
		});
	}

	public connect(macAddress: string): any {
		return BluetoothSerial.connect(macAddress);
	}

	public connectInsecure(macAddress: string): any {
		return BluetoothSerial.connectInsecure(macAddress);
	}

	public list(): Promise<any> {
		return BluetoothSerial.list();
	}

	public isEnabled(): Promise<any> {
		if(this._isCordova === true) {
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