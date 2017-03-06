import { ApiEntity } from '../../common/models';

export class Category extends ApiEntity {

	private _name: string;
	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	private _description: string;
	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	private _active: boolean;
	public get active(): boolean {
		return this._active;
	}

	public set active(value: boolean) {
		this._active = value;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	public set slug(value: string) {
		this._slug = value;
	}

	private _googleCategory: string;
	public get googleCategory(): string {
		return this._googleCategory;
	}

	public set googleCategory(value: string) {
		this._googleCategory = value;
	}

	private _order: number;
	public get order(): number {
		return this._order;
	}

	public set order(value: number) {
		this._order = value;
	}

	private _commercial: boolean ;
	public get commercial(): boolean  {
		return this._commercial;
	}

	public set commercial(value: boolean) {
		this._commercial = value;
	}
}
