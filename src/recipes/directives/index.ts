import { RecipeRating }     from './recipe-rating.component';
import { RecipeFavorite }   from './recipe-favorite.component';
import { MainMenu }         from './main-menu.component';
import { RecipeYoutube }    from './recipe-youtube.component';
import { RecipeShare }      from './recipe-share.component';

export {
	RecipeRating,
	MainMenu,
	RecipeShare
}

export const RECIPE_DIRECTIVES = [
	RecipeRating,
	MainMenu,
	RecipeFavorite,
	RecipeYoutube,
	RecipeShare
];
