import {Injectable} from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';

@Injectable()
export class LogService {

	constructor(private _toastCtrl: ToastController) {
	}

	public log(...args: any[]): void {
		console.log(args);
	}

	public error(message: string, data?: any): void {
		console.error(message, data);
	}

	public success(message: string, duration?: number, position?: string): Promise<void> {
		console.log(message);
		return this.toast(message, duration, position);
	}

	public warning(message: string, data?: any, duration?: number, position?: string): Promise<void> {
		console.warn(message, data);
		return this.toast(message, duration, position);
	}

	private toast(message: string, duration?: number, position?: string): Promise<void> {
		let toast: Toast = this._toastCtrl.create({
			message: message,
			duration: duration || 3000,
			position: position || 'top'
		});
		return toast.present();
	}
}