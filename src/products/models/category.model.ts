import { ApiEntity } from "../../common/models";

export class Category extends ApiEntity {

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _description: string;
	public get description(): string {
		return this._description;
	}

	private _active: boolean;
	public get active(): boolean {
		return this._active;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	private _googleCategory: string;
	public get googleCategory(): string {
		return this._googleCategory;
	}

	private _order: number;
	public get order(): number {
		return this._order;
	}

	private _commercial: boolean ;
	public get commercial(): boolean  {
		return this._commercial;
	}
}