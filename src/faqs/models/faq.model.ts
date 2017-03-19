
export class Faq {

	constructor(private fields: any) {
		for (let f in fields)
			this['_' + f] = fields[f];
	}

	private _id: string;
	public get id(): string {
		return this._id;
	}

	private _question: string;
	public get question(): string {
		return this._question;
	}

	private _answer: string;
	public get answer(): string {
		return this._answer;
	}

	private _type: string;
	public get type(): string {
		return this._type;
	}

	private _created: string;
	public get created(): string {
		return this._created;
	}

	private _modified: string;
	public get modified(): string {
		return this._modified;
	}

	private _category: string;
	public get category(): string {
		return this._category;
	}
}