import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DeviceService } from '../../providers/device.service';
import { LogService } from '../../providers/log.service';

@Component({
	selector: 'modal-share',
	templateUrl: './share.modal.html'
})
export class ShareModal implements OnInit {

	public network: string;
	public imageUrl: string;
	public shareForm: FormGroup;

	constructor(private _navParams: NavParams,
				private _viewCtrl: ViewController,
				private _formBldr: FormBuilder,
				private _socialSharing: SocialSharing,
				private _deviceSrvc: DeviceService,
				private _logSrvc: LogService) {
		this.network = _navParams.get('network');
		this.imageUrl = _navParams.get('imageUrl');
	}

	ngOnInit(): void {
		this.shareForm = this._formBldr.group({
			subject: [this._navParams.get('subject'), Validators.required],
			message: [this._navParams.get('message'), Validators.required]
		});
	}

	dismiss(): void {
		this._viewCtrl.dismiss();
	}

	share(form: any): Promise<any> {
		if (form.invalid) return Promise.resolve();
		return this._shareVia(this.network, form.value)
			.then(() => this.dismiss());
	}

	private _shareVia(network: string, data: any): Promise<any> {
		if(!this._deviceSrvc.isCordova()) {
			this._logSrvc.log(`SHARED TO ${network}: `, data);
			return Promise.resolve();
		}
		switch (network) {
			case 'email':
				return this._socialSharing.shareViaEmail(data.message, data.subject, ['slarklasley@gmail.com']);
			case 'twitter':
				return this._socialSharing.shareViaTwitter(data.message, this.imageUrl);
			case 'instagram':
				return this._socialSharing.shareViaInstagram(data.message, this.imageUrl);
			case 'facebook':
				return this._socialSharing.shareViaFacebook(data.message, this.imageUrl);
			default:
				return this._socialSharing.shareViaSMS(data.subject + '\r\n' + data.message, '4357299572');
		}
	}
}