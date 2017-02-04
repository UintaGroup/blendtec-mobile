import { BaseModel } from './base-model';

export class Ingredient extends  BaseModel {
	private _id: number;
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	private _section_header: boolean;
	public get sectionHeader(): boolean {
		return this._section_header;
	}

	public set sectionHeader(value: boolean) {
		this._section_header = value;
	}
}
