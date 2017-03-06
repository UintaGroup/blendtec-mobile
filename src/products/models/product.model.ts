import { ApiEntity } from '../../common/models/api-entity';
export class Product extends ApiEntity {

	private _item_code: string;
	public get itemCode(): string {
		return this._item_code;
	}

	private _caption_short: string;
	public get captionShort(): string {
		return this._caption_short;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	private _features: string;
	public get features(): string {
		return this._features;
	}

	private _tech_specs: string;
	public get techSpecs(): string {
		return this._tech_specs;
	}

	private _caption: string;
	public get caption(): string {
		return this._caption;
	}

	private _product_id: number;
	public get productID(): number {
		return this._product_id;
	}

	/* tslint:disable */
	private _category_id: number;
	/* tslint:enable */
	public get categoryId(): number {
		return this._category_id;
	}

	private _price: number;
	public get price(): number {
		return this._price;
	}

	private _column_order: number;
	public get columnOrder(): number {
		return this._column_order;
	}

	private _active: boolean;
	public get active(): boolean {
		return this._active;
	}

	private _youtube_code: string;
	public get youtubeCode(): string {
		return this._youtube_code;
	}

	private _slug: string;
	public get slug(): string {
		return this._slug;
	}

	private _is_jar: boolean;
	public get isJar(): boolean {
		return this._is_jar;
	}

	private _color: string;
	public get color(): string {
		return this._color;
	}

	/* tslint:disable */
	private _package_includes: string;
	/* tslint:enable */
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

	private _show_map: boolean;
	public get showMap(): boolean {
		return this._show_map;
	}

	private _listed: number;
	public get listed(): number {
		return this._listed;
	}

	private _product_stock_status_id: string;
	public get productStockStatusId(): string {
		return this._product_stock_status_id;
	}

	private _featured: boolean;
	public get featured(): boolean {
		return this._featured;
	}

	private _color_id: string;
	public get colorId(): string {
		return this._color_id;
	}

	private _jar_id: string;
	public get jarId(): string {
		return this._jar_id;
	}

	private _additional_notes: string;
	public get additionalNotes(): string {
		return this._additional_notes;
	}

	private _warranty_length: number;
	public get warrantyLength(): number {
		return this._warranty_length;
	}
}
