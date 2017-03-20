import { Component, Input } from '@angular/core';
import { Faq } from '../models/faq.model';

@Component({
	selector: 'faq-category-badges',
	template: `<ion-row><div ngSwitch="{{faq?.type}}">
					<div *ngSwitchCase="'Residential'">
						<ion-badge color="blendtec" item-right>Residential</ion-badge>
					</div>
					<div *ngSwitchCase="'Commercial'">
						<ion-badge color="blendtec-grey" item-right>Commercial</ion-badge>
					</div>
					<div *ngSwitchCase="'Warranty'">
						<ion-badge color="primary" item-right>Warranty</ion-badge>
					</div>
					<div *ngSwitchCase="'Dealer'">
						<ion-badge color="secondary" item-right>Dealer</ion-badge>
					</div>
					<div *ngSwitchCase="'DealerCanada'">
						<ion-badge color="secondary" item-right>Canadian Dealer</ion-badge>
					</div>
					<div *ngSwitchCase="'Careers'">
						<ion-badge color="secondary" item-right>Careers</ion-badge>
					</div>
				</div>
				<div ngSwitch="{{faq?.category}}">
					<div *ngSwitchCase="'Jars'">
						<ion-badge color="blendtec-grey" item-right>Jars</ion-badge>
					</div>
					<div *ngSwitchCase="'BlenderModelsAndCycles'">
						<ion-badge color="blendtec" item-right>Blenders & Cycles</ion-badge>
					</div>
					<div *ngSwitchCase="'KitchenMill'">
						<ion-badge color="primary" item-right>Kitchen Mill</ion-badge>
					</div>
					<div *ngSwitchCase="'CustomerServiceAndWarranty'">
						<ion-badge color="secondary" item-right>Service & Warranty</ion-badge>
					</div>
				</div></ion-row>`
})
export class CategoryBadges {

	@Input()
	faq: Faq;
}