import { Component, Input } from '@angular/core';

@Component({
	selector: 'recipe-rating',
	template: `<div class="star-ratings">
					<ion-icon *ngFor="let i of fullStars" color="blendtec" name="star"></ion-icon>
					<ion-icon style="margin-left: -4px; margin-right: -4px" *ngIf="halfStar" color="blendtec" name="star-half"></ion-icon>
					<ion-icon *ngFor="let i of emptyStars" color="blendtec" name="star-outline"></ion-icon>
				</div>`
})
export class RecipeRating {

	@Input() rating: number;
	private _possibleStars: number = 5;

	private get fullStars(): number[] {
		return new Array(Math.floor(this.rating));
	}

	private get emptyStars(): number[] {
		return new Array(this._possibleStars - Math.ceil(this.rating));
	}

	private get halfStar(): boolean {
		return this.rating % 1 > 0;
	}
}
