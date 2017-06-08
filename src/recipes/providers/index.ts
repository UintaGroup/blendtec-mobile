import { RecipeCategoryService }    from './recipe-category.service';
import { RecipeService }            from './recipe.service';
import { RecipeFavoriteService }          from './recipe-favorite.service';

export {
	RecipeCategoryService,
	RecipeService,
	RecipeFavoriteService
}

export const RECIPE_PROVIDERS = [
	RecipeCategoryService,
	RecipeService,
	RecipeFavoriteService
];
