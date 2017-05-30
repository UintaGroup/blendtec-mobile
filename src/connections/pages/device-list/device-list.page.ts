import { Component }            from '@angular/core';
import { BluetoothService }     from '../../providers';

@Component({
	selector: 'device-list',
	templateUrl: 'device-list.page.html'
})
export class DeviceListPage {

	public btItems: any[] = [];
	public connectionType: any = '';
	private btEnabled: boolean = false;

	constructor(private _btSrvc: BluetoothService) {
	}

	ionViewDidEnter(): any {
		this.loadBlueTooth();
	}

	public loadBlueTooth(): Promise<void> {
		return this._btSrvc.isEnabled().then((enabled) => {
			if (enabled) {
				this.btEnabled = enabled;
				return this._btSrvc.list().then(i => this.btItems = i);
			}
		});
	}

	public settings(): Promise<any> {
		if (this.btEnabled === true) {
			return this._btSrvc.openBlueToothSettings();
		} else {
			return Promise.resolve();
		}
	}
}
