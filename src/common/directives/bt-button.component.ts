import { Component } from '@angular/core';

@Component({
	selector: 'bt-button',
	template: `<button class="bt-button" color="blendtec" ion-button outline block>
					<div class="bt-button-text">
						<span><ng-content></ng-content></span>
					</div>
					<div class="bt-button-icon">
						<ion-icon name="ios-arrow-forward" item-right></ion-icon>
					</div>
				</button>`,
})
export class BlendtecButton {}
