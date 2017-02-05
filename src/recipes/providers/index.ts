import { BlendtecApi }      from './blendtec-api';
import { RecipeCategories } from './recipe-categories';
import { Recipes }          from './recipes';

export {
	BlendtecApi,
	RecipeCategories,
	Recipes
}

export const RECIPE_PROVIDERS = [
	BlendtecApi,
	RecipeCategories,
	Recipes
];
