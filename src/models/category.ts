export class RecipeCategory {

	constructor(name: string, slug: string) {
		this._name = name;
		this._slug = slug;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}
}
