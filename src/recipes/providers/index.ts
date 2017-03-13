import { CategoryService } from './recipe-category.service';
import { RecipeService }          from './recipe.service';

export {
	CategoryService,
	RecipeService
}

export const RECIPE_PROVIDERS = [
	CategoryService,
	RecipeService
];
