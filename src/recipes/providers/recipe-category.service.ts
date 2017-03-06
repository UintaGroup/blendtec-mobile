import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {

	private _categories: Category[] = [
		new Category('Breads & Batters', 'breads','pizza' ),
		new Category('Beverages', 'beverages', 'beer'),
		new Category('Desserts', 'desserts', 'ice-cream'),
		new Category('Soups', 'soups', 'cafe'),
		new Category('Smoothies', 'smoothies', 'nutrition'),
		new Category('Meal Ideas', 'meal_ideas', 'restaurant'),
		new Category('Dressings and Marinades', 'dressings_and_marinades', 'color-fill'),
		new Category('Dips, Sauces, and Spreads', 'dips_sauces_and_spreads', 'flask')
	];

	public all(): Observable<Category> {
		return Observable.from<Category>(this._categories);
	}

}
