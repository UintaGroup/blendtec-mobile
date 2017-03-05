import { BlendtecApi }      from './blendtec-api';
import { RecipeCategoryService } from './recipe-category.service';
import { RecipeService }          from './recipe.service';

export {
	BlendtecApi,
	RecipeCategoryService,
	RecipeService
}

export const RECIPE_PROVIDERS = [
	BlendtecApi,
	RecipeCategoryService,
	RecipeService
];
