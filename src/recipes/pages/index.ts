import { RecipeListPage }           from './recipe-list/recipe-list.page';
import { RecipeCategoryListPage }   from './recipe-category-list/recipe-category-list.page';
import { RecipeTabsPage }           from './recipe-tabs/recipe-tabs.page';
import { RecipeSearchPage }         from './recipe-search/recipe-search.page';
import { RecipeDetailPage }         from './recipe-detail/recipe-detail.page';

/* tslint:disable */
export const MainPage = RecipeTabsPage;
export const Tab1Root = RecipeListPage;
export const Tab2Root = RecipeSearchPage;
export const Tab3Root = RecipeCategoryListPage;
/* tslint:enable */

export {
	RecipeTabsPage as EntryPage,
	RecipeListPage,
	RecipeCategoryListPage,
	RecipeTabsPage,
	RecipeSearchPage,
	RecipeDetailPage
}

export const RECIPE_PAGES = [
	RecipeListPage,
	RecipeSearchPage,
	RecipeCategoryListPage,
	RecipeTabsPage,
	RecipeDetailPage
];
