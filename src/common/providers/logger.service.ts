import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

	private window: any = <any>window;

	public log(...args: any[]): void {
		console.log(args);
	}

	public error(message: string, data?: any): void {
		console.error(message, data);
		this.toast(message);
	}

	public success(message: string): void {
		console.log(message);
		this.toast(message);
	}

	public warning(message: string, data?: any): void {
		console.warn(message, data);
		this.toast(message);
	}

	private toast(message: string): void {
		if (this.window.plugins && this.window.plugins.toast) {
			this.window.plugins.toast.show(message);
		}
	}
}