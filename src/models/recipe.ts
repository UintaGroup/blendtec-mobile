export class Recipe {

	constructor(private fields: any) {
		for (let f in fields)
			this[f] = fields[f];
	}

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

	private _description: string;
	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	private _instructions: string;
	public get instructions(): string {
		return this._instructions;
	}

	public set instructions(value: string) {
		this._instructions = value;
	}

	private _variations: string;
	public get variations(): string {
		return this._variations;
	}

	public set variations(value: string) {
		this._variations = value;
	}

	private _servings: number;
	public get servings(): number {
		return this._servings;
	}

	public set servings(value: number) {
		this._servings = value;
	}

	private _servingSize: string;
	public get servingSize(): string {
		return this._servingSize;
	}

	public set servingSize(value: string) {
		this._servingSize = value;
	}

	private _calories: number;
	public get calories(): number {
		return this._calories;
	}

	public set calories(value: number) {
		this._calories = value;
	}

	private _fat: number;
	public get fat(): number {
		return this._fat;
	}

	public set fat(value: number) {
		this._fat = value;
	}

	private _satFat: number;
	public get satFat(): number {
		return this._satFat;
	}

	public set satFat(value: number) {
		this._satFat = value;
	}

	private _sodium: number;
	public get sodium(): number {
		return this._sodium;
	}

	public set sodium(value: number) {
		this._sodium = value;
	}

	private _cho: number;
	public get cho(): number {
		return this._cho;
	}

	public set cho(value: number) {
		this._cho = value;
	}

	private _fiber: number;
	public get fiber(): number {
		return this._fiber;
	}

	public set fiber(value: number) {
		this._fiber = value;
	}

	private _sugar: number;
	public get sugar(): number {
		return this._sugar;
	}

	public set sugar(value: number) {
		this._sugar = value;
	}

	private _protein: number;
	public get protein(): number {
		return this._protein;
	}

	public set protein(value: number) {
		this._protein = value;
	}

	private _youtubeCode: string;
	public get youtubeCode(): string {
		return this._youtubeCode;
	}

	public set youtubeCode(value: string) {
		this._youtubeCode = value;
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

	private _created: string;
	public get created(): string {
		return this._created;
	}

	public set created(value: string) {
		this._created = value;
	}

	private _modified: string;
	public get modified(): string {
		return this._modified;
	}

	public set modified(value: string) {
		this._modified = value;
	}

	private _recipeOfTheWeek: boolean;
	public get recipeOfTheWeek(): boolean {
		return this._recipeOfTheWeek;
	}

	public set recipeOfTheWeek(value: boolean) {
		this._recipeOfTheWeek = value;
	}

	private _rotwStartDate: string;
	public get rotwStartDate(): string {
		return this._rotwStartDate;
	}

	public set rotwStartDate(value: string) {
		this._rotwStartDate = value;
	}

	private _rating: number;
	public get rating(): number {
		return this._rating;
	}

	public set rating(value: number) {
		this._rating = value;
	}

	private _ratingCount: number;
	public get ratingCount(): number {
		return this._ratingCount;
	}

	public set ratingCount(value: number) {
		this._ratingCount = value;
	}

	private _publishDate: string;
	public get publishDate(): string {
		return this._publishDate;
	}

	public set publishDate(value: string) {
		this._publishDate = value;
	}

	private _preptimeSeconds: number;
	public get preptimeSeconds(): number {
		return this._preptimeSeconds;
	}

	public set preptimeSeconds(value: number) {
		this._preptimeSeconds = value;
	}

	private _blogUrl: string;
	public get blogUrl(): string {
		return this._blogUrl;
	}

	public set blogUrl(value: string) {
		this._blogUrl = value;
	}

	private _blogTitle: string;
	public get blogTitle(): string {
		return this._blogTitle;
	}

	public set blogTitle(value: string) {
		this._blogTitle = value;
	}

	private _nutritionInfoSentence: string;
	public get nutritionInfoSentence(): string {
		return this._nutritionInfoSentence;
	}

	public set nutritionInfoSentence(value: string) {
		this._nutritionInfoSentence = value;
	}

	private _tags: string;
	public get tags(): string {
		return this._tags;
	}

	public set tags(value: string) {
		this._tags = value;
	}

	private _sideBarImageUrl: string;
	public get sideBarImageUrl(): string {
		return this._sideBarImageUrl;
	}

	public set sideBarImageUrl(value: string) {
		this._sideBarImageUrl = value;
	}

	private _indexImageUrl: string;
	public get indexImageUrl(): string {
		return this._indexImageUrl;
	}

	public set indexImageUrl(value: string) {
		this._indexImageUrl = value;
	}

	private _hideNutrition: boolean;
	public get hideNutrition(): boolean {
		return this._hideNutrition;
	}

	public set hideNutrition(value: boolean) {
		this._hideNutrition = value;
	}
}
