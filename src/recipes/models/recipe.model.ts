import { BaseRecipe } from './base-recipe.model';
import { RecipeIngredient } from './recipe-ingredient';

export class Recipe extends BaseRecipe {

	constructor(data: any, relatedRecipeData?: any, ingredientData?: any) {
		super(data);
		if(relatedRecipeData) {
			this.relatedRecipeService = relatedRecipeData.map(x => new BaseRecipe(x));
		}
		if(ingredientData) {
			this.ingredients = ingredientData.map(x => new RecipeIngredient(x));
		}
	}

	private _relatedRecipeService: BaseRecipe[] = [];
	public get relatedRecipeService(): BaseRecipe[] {
		return this._relatedRecipeService;
	}

	public set relatedRecipeService(value: BaseRecipe[]) {
		this._relatedRecipeService = value;
	}

	private _ingredients: RecipeIngredient[];
	public get ingredients(): RecipeIngredient[] {
		return this._ingredients;
	}

	public set ingredients(value: RecipeIngredient[]) {
		this._ingredients = value;
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

	/* tslint:disable */
	private _serving_size: string;
	/* tslint:enable */
	public get servingSize(): string {
		return this._serving_size;
	}

	public set servingSize(value: string) {
		this._serving_size = value;
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

	private _satfat: number;
	public get satFat(): number {
		return this._satfat;
	}

	public set satFat(value: number) {
		this._satfat = value;
	}

	private _sodium: number;
	public get sodium(): number {
		return this._sodium;
	}

	public set sodium(value: number) {
		this._sodium = value;
	}

	private _cho: number;
	public get carbohydrates(): number {
		return this._cho;
	}

	public set carbohydrates(value: number) {
		this._cho = value;
	}

	private _cholesterol: number;
	public get cholesterol(): number {
		return this._cholesterol;
	}

	public set cholesterol(value: number) {
		this._cholesterol = value;
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

	/* tslint:disable */
	private _youtube_code: string;
	/* tslint:enable */
	public get youtubeCode(): string {
		return this._youtube_code;
	}

	public set youtubeCode(value: string) {
		this._youtube_code = value;
	}

	private _active: boolean;
	public get active(): boolean {
		return this._active;
	}

	public set active(value: boolean) {
		this._active = value;
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

	/* tslint:disable */
	private _rating_count: number;
	/* tslint:enable */
	public get ratingCount(): number {
		return this._rating_count;
	}

	public set ratingCount(value: number) {
		this._rating_count = value;
	}

	private _publishDate: string;
	public get publishDate(): string {
		return this._publishDate;
	}

	public set publishDate(value: string) {
		this._publishDate = value;
	}

	/* tslint:disable */
	private _cooktime_seconds: number;
	/* tslint:enable */
	public get cookTimeSeconds(): number {
		return this._cooktime_seconds;
	}

	public set cookTimeSeconds(value: number) {
		this._cooktime_seconds = value;
	}

	/* tslint:disable */
	private _preptime_seconds: number;
	/* tslint:enable */
	public get preptimeSeconds(): number {
		return this._preptime_seconds;
	}

	public set preptimeSeconds(value: number) {
		this._preptime_seconds = value;
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

	/* tslint:disable */
	private _nutrition_info_sentence: string;
	/* tslint:enable */
	public get nutrition_info_sentence(): string {
		return this._nutrition_info_sentence;
	}

	public set nutrition_info_sentence(value: string) {
		this._nutrition_info_sentence = value;
	}

	private _tags: string;
	public get tags(): string {
		return this._tags;
	}

	public set tags(value: string) {
		this._tags = value;
	}

	private _indexImageUrl: string;
	public get indexImageUrl(): string {
		return this._indexImageUrl;
	}

	public set indexImageUrl(value: string) {
		this._indexImageUrl = value;
	}

	private _imageUrls: string[];
	public set imageUrls(value: string[]) {
		this._imageUrls = value;
	}

	/* tslint:disable */
	private _hide_nutrition: boolean;
	/* tslint:enable */
	public get hideNutrition(): boolean {
		return this._hide_nutrition;
	}

	public set hideNutrition(value: boolean) {
		this._hide_nutrition = value;
	}
}
