export class Category {

	constructor(name: string, slug: string, icon: string) {
		this._name = name;
		this._slug = slug;
		this._icon = icon;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	private _icon: string;
	public get icon(): string {
		return this._icon;
	}
}
