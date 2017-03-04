import { ApiEntity } from "../../common/models/api-entity";
export class Product extends ApiEntity {

	private _itemCode: string;
	public get itemCode(): string {
		return this._itemCode;
	}

	private _captionShort: string;
	public get captionShort(): string {
		return this._captionShort;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _features: string;
	public get features(): string {
		return this._features;
	}

	private _techSpecs: string;
	public get techSpecs(): string {
		return this._techSpecs;
	}

	private _caption: string;
	public get caption(): string {
		return this._caption;
	}

	private _productID: number;
	public get productID(): number {
		return this._productID;
	}

	private _category_id: number;
	public get categoryId(): number {
		return this._category_id;
	}

	private _price: number;
	public get price(): number {
		return this._price;
	}

	private _columnOrder: number;
	public get columnOrder(): number {
		return this._columnOrder;
	}

	private _active: boolean;
	public get active(): boolean {
		return this._active;
	}

	private _youtubeCode: string;
	public get youtubeCode(): string {
		return this._youtubeCode;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	private _isJar: boolean;
	public get isJar(): boolean {
		return this._isJar;
	}

	private _color: string;
	public get color(): string {
		return this._color;
	}

	private _package_includes: string;
	public get packageIncludes(): string {
		return this._package_includes;
	}

	private _upc: string;
	public get upc(): string {
		return this._upc;
	}

	private _map: number;
	public get map(): number {
		return this._map;
	}

	private _showMap: boolean;
	public get showMap(): boolean {
		return this._showMap;
	}

	private _listed: number;
	public get listed(): number {
		return this._listed;
	}

	private _productStockStatusId: string;
	public get productStockStatusId(): string {
		return this._productStockStatusId;
	}

	private _featured: boolean;
	public get featured(): boolean {
		return this._featured;
	}

	private _colorId: string;
	public get colorId(): string {
		return this._colorId;
	}

	private _jarId: string;
	public get jarId(): string {
		return this._jarId;
	}

	private _additionalNotes: string;
	public get additionalNotes(): string {
		return this._additionalNotes;
	}

	private _warrantyLength: number;
	public get warrantyLength(): number {
		return this._warrantyLength;
	}
}