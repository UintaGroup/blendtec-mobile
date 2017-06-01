import { CategoryService }  from './recipe-category.service';
import { RecipeService }    from './recipe.service';
import { MyRecipeService }  from './my-recipe.service';

export {
	CategoryService,
	RecipeService,
	MyRecipeService
}

export const RECIPE_PROVIDERS = [
	CategoryService,
	RecipeService,
	MyRecipeService
];
