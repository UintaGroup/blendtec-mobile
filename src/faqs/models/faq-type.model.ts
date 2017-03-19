export class FaqType {

	constructor(private fields: any) {
		for (let f in fields)
			this['_' + f] = fields[f];
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}
}