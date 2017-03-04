export abstract class ApiEntity {

	constructor(private fields: any) {
		for (let f in fields) {
			if(this.hasOwnProperty('_' + f))
				this['_' + f] = fields[f];
		}
	}

	protected _id: number;
	public get id(): number {
		return this._id;
	}

	protected _created: string;
	public get created(): string {
		return this._created;
	}

	protected _modified: string;
	public get modified(): string {
		return this._modified;
	}
}