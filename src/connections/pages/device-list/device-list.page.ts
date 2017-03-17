import { Component }            from '@angular/core';
import { BluetoothService }     from '../../providers';
import { NetworkService } from '../../providers/network.service';

@Component({
	selector: 'device-list',
	templateUrl: 'device-list.page.html'
})
export class DeviceListPage {

	public btItems: any[] = [];
	public connectionType: any = '';
	private btEnabled: boolean = false;
	private _networkEnabled: boolean = false;

	constructor(private _btSrvc: BluetoothService, private _networkSrvc: NetworkService) {
		this.loadBlueTooth();
		this.loadNetwork();
	}

	public loadBlueTooth(): Promise<void> {
		return this._btSrvc.isEnabled().then((enabled) => {
			if (enabled) {
				this.btEnabled = enabled;
				return this._btSrvc.list().then(i => this.btItems = i);
			}
		});
	}

	public loadNetwork(): void {
		if (this._networkSrvc.enabled()) {
			this._networkEnabled = true;
			this.connectionType = this._networkSrvc.connectionType();
		}
	}

	public settings(): Promise<any> {
		if (this.btEnabled === true) {
			return this._btSrvc.openBlueToothSettings();
		} else {
			return Promise.resolve();
		}
	}
}
