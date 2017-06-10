import { Component }        from '@angular/core';
import { Events }           from 'ionic-angular';
import { BluetoothService } from '../../providers';
import { CommonEvents }     from '../../../common/models';

@Component({
	selector: 'device-list',
	templateUrl: 'device-list.page.html'
})
export class DeviceListPage {

	public btItems: any[] = [];
	public connectionType: any = '';
	private btEnabled: boolean = false;

	constructor(private _btSrvc: BluetoothService, private _events: Events) {
	}

	public ionViewDidEnter(): any {
		this.loadBlueTooth();
		this._events.publish(CommonEvents.pageView, 'DeviceList');
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
