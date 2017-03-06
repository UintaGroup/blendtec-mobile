export abstract class ApiEntity {

	constructor(private fields: any) {
		for (let f in fields)
			this['_' + f] = fields[f];
	}

	protected _id: number;
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	protected _created: string;
	public get created(): string {
		return this._created;
	}

	public set created(value: string) {
		this._created = value;
	}

	protected _modified: string;
	public get modified(): string {
		return this._modified;
	}

	public set modified(value: string) {
		this._modified = value;
	}
}