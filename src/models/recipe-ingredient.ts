import { BaseModel } from './base-model';
export class RecipeIngredient extends BaseModel {
	private _id: number;
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	private _amount: number;
	public get amount(): number {
		return this._amount;
	}

	public set amount(value: number) {
		this._amount = value;
	}

	private _measurement: string;
	public get measurement(): string {
		return this._measurement;
	}

	public set measurement(value: string) {
		this._measurement = value;
	}

	private _description: string;
	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	private _recipe_id: number;
	public get recipeId(): number {
		return this._recipe_id;
	}

	public set recipeId(value: number) {
		this._recipe_id = value;
	}
}
