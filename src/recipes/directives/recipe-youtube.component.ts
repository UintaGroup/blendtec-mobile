import { Component, Input } from '@angular/core';
import { MyRecipeService } from '../providers/my-recipe.service';

@Component({
	selector: 'recipe-youtube',
	template: `
		<button ion-button icon-left clear (click)="watch()" class="recipe-youtube" color="grey-med">
			<ion-icon name="logo-youtube" color="blendtec"></ion-icon>
			Watch
		</button>`
})
export class RecipeYoutube {

	@Input()
	youtubeId: string;

	public watch(): void {
		console.log('WATCHING', this.youtubeId);
	}

}
