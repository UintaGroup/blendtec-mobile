import { BaseModel } from './base.model';

export class BaseRecipe extends BaseModel {

	private _id: number;
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	private _title: string;
	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	public set slug(value: string) {
		this._slug = value;
	}

	private _sidebarImageUrl: string;
	public get sideBarImageUrl(): string {
		return this._sidebarImageUrl;
	}

	public set sideBarImageUrl(value: string) {
		this._sidebarImageUrl = value;
	}
}
