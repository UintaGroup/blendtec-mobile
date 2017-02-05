import { ListRecipePage } from './list-recipe/list-recipe';
import { ListRecipeCategoryPage } from './list-recipe-category/list-recipe-category';
import { TabsPage } from './tabs/tabs';
import { SearchPage } from './search/search';
import { RecipeDetailPage } from './recipe-detail/recipe-detail';

export const MainPage = TabsPage;
export const Tab1Root = ListRecipePage;
export const Tab2Root = SearchPage;
export const Tab3Root = ListRecipeCategoryPage;

export {
	TabsPage as EntryPage,
	ListRecipePage,
	ListRecipeCategoryPage,
	TabsPage,
	SearchPage,
	RecipeDetailPage
}
export const RECIPE_PAGES = [
	ListRecipePage,
	SearchPage,
	ListRecipeCategoryPage,
	TabsPage,
	RecipeDetailPage
];

