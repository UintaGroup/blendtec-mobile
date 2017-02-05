import { TutorialPage } from './tutorial/tutorial';
import { RecipeCategories } from '../recipes/providers/recipe-categories';
import { SearchPage } from '../recipes/pages/search/search';
import { TabsPage } from '../recipes/pages/tabs/tabs';
import { RecipeDetailPage } from '../recipes/pages/recipe-detail/recipe-detail';
import { ListRecipePage } from '../recipes/pages/list-recipe/list-recipe';

export const FirstRunPage = TutorialPage;

export const RECIPE_PAGES = [
	RecipeCategories,
	SearchPage,
	TabsPage,
	RecipeDetailPage,
	ListRecipePage
]
