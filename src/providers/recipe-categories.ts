import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { RecipeCategory } from "../models/category";

@Injectable()
export class RecipeCategories {

	private categories: RecipeCategory[] = [
		new RecipeCategory("Breads & Batters", "breads"),
		new RecipeCategory("Beverages", "beverages"),
		new RecipeCategory("Desserts", "desserts"),
		new RecipeCategory("Soups", "soups"),
		new RecipeCategory("Smoothies", "smoothies"),
		new RecipeCategory("Meal Ideas", "meal_ideas"),
		new RecipeCategory("Dressings and Marinades", "dressings_and_marinades"),
		new RecipeCategory("Dips, Sauces, and Spreads", "dips_sauces_and_spreads")
	];
	constructor() {}

	all(): Observable<RecipeCategory> {
		return Observable.from<RecipeCategory>(this.categories);
	}

}
