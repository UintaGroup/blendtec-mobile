import { RecipeCategoryService }    from './recipe-category.service';
import { RecipeService }            from './recipe.service';
import { MyRecipeService }          from './my-recipe.service';

export {
	RecipeCategoryService,
	RecipeService,
	MyRecipeService
}

export const RECIPE_PROVIDERS = [
	RecipeCategoryService,
	RecipeService,
	MyRecipeService
];
