import { IProductColor } from './iproduct-color.model';
export class ProductColor implements IProductColor {

	constructor(private fields: any) {
		for (let f in fields)
			this['_' + f] = fields[f];
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _image: string;
	public get image(): string {
		return this._image;
	}

	private _color: string;
	public get color(): string {
		return this._color;
	}

	/* tslint:disable */
	private _primary_image: string;
	/* tslint:enable */
	public get primaryImage(): string {
		return this._primary_image;
	}
}