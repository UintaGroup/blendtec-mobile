import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsService {
	private SETTINGS_KEY: string = '_settings';

	settings: any;

	_defaults: any;

	constructor(public storage: Storage, defaults?: any) {
		this._defaults = defaults;
	}

	public load(): Promise<any> {
		return this.storage.get(this.SETTINGS_KEY).then((value) => {
			if (value) {
				this.settings = value;
				this._mergeDefaults(this._defaults);
			} else {
				this.setAll(this._defaults).then((val) => {
					this.settings = val;
				});
			}
		});
	}

	private _mergeDefaults(defaults: any): Promise<any> {
		for (let k in defaults) {
			if (!(k in this.settings)) {
				this.settings[k] = defaults[k];
			}
		}
		return this.setAll(this.settings);
	}

	public merge(settings: any): Promise<any> {
		for (let k in settings) {
			this.settings[k] = settings[k];
		}
		return this.save();
	}

	public setValue(key: string, value: any): Promise<any> {
		this.settings[key] = value;
		return this.storage.set(this.SETTINGS_KEY, this.settings);
	}

	public setAll(value: any): Promise<any> {
		return this.storage.set(this.SETTINGS_KEY, value);
	}

	public getValue(key: string): Promise<any> {
		return this.storage.get(key);
	}

	public save(): Promise<any> {
		return this.setAll(this.settings);
	}

	public get allSettingsService(): any {
		return this.settings;
	}
}
