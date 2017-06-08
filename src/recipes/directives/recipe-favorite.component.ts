import { Component, Input }         from '@angular/core';
import { RecipeFavoriteService }    from '../providers/recipe-favorite.service';

@Component({
	selector: 'recipe-favorite',
	template: `
		<button *ngIf="favorite(); else elseBlock" ion-button icon-left clear (click)="toggleFav()" class="recipe-favorite" color="grey-med">
			<ion-icon name="heart-outline" color="grey-med"></ion-icon>
			Favorited
		</button>
		<template #elseBlock>
			<button class="recipe-favorite" ion-button icon-left clear (click)="toggleFav()" color="grey-med">
				<ion-icon name="heart" color="blendtec"></ion-icon>
				Favorite
			</button>
		</template>`
})
export class RecipeFavorite {

	@Input()
	slug: string;

	public constructor(private _myRecipeService: RecipeFavoriteService) {
	}

	public toggleFav(): Promise<any> {
		return this._myRecipeService.favorite(this.slug);
	}

	public favorite(): boolean {
		return this._myRecipeService.isFavorite(this.slug);
	}

}
