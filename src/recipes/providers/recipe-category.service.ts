import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { RecipeCategory } from '../models/category.model';

@Injectable()
export class RecipeCategoryService {

	private _categories: RecipeCategory[] = [
		new RecipeCategory('Breads & Batters', 'breads','pizza' ),
		new RecipeCategory('Beverages', 'beverages', 'beer'),
		new RecipeCategory('Desserts', 'desserts', 'ice-cream'),
		new RecipeCategory('Soups', 'soups', 'cafe'),
		new RecipeCategory('Smoothies', 'smoothies', 'nutrition'),
		new RecipeCategory('Meal Ideas', 'meal_ideas', 'restaurant'),
		new RecipeCategory('Dressings and Marinades', 'dressings_and_marinades', 'color-fill'),
		new RecipeCategory('Dips, Sauces, and Spreads', 'dips_sauces_and_spreads', 'flask')
	];

	public all(): Observable<RecipeCategory> {
		return Observable.from<RecipeCategory>(this._categories);
	}

}
