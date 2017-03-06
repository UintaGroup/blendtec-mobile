import { BlendtecApi }      from './blendtec-api';
import { CategoryService } from './recipe-category.service';
import { RecipeService }          from './recipe.service';

export {
	BlendtecApi,
	CategoryService,
	RecipeService
}

export const RECIPE_PROVIDERS = [
	BlendtecApi,
	CategoryService,
	RecipeService
];
