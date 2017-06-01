import { Component, Input, OnChanges, }         from '@angular/core';
import { ModalController }                      from 'ionic-angular';
import { SocialSharing }                        from '@ionic-native/social-sharing';
import { ShareModal }                           from '../../common/pages';
import { DeviceService }                        from '../../common/providers';
import { Recipe }                               from '../models';

@Component({
	selector: 'share',
	template: `
		<ion-fab *ngIf="visible()" right bottom>
			<button ion-fab mini color="grey-light">
				<ion-icon name="share" color="blendtec"></ion-icon>
			</button>
			<ion-fab-list side="top">
				<button (click)="share('text')" ion-fab>
					<ion-icon color="blendtec" name="text"></ion-icon>
				</button>
				<button (click)="share('email')" *ngIf="email" ion-fab>
					<ion-icon color="blendtec" name="mail"></ion-icon>
				</button>
				<button (click)="share('facebook')" *ngIf="facebook" ion-fab>
					<ion-icon color="facebook" name="logo-facebook"></ion-icon>
				</button>
				<button (click)="share('twitter')" *ngIf="twitter" ion-fab>
					<ion-icon color="twitter" name="logo-twitter"></ion-icon>
				</button>
				<button (click)="share('googleplus')" *ngIf="googleplus" ion-fab>
					<ion-icon color="google-plus" name="logo-googleplus"></ion-icon>
				</button>
				<button (click)="share('instagram')" *ngIf="instagram" ion-fab>
					<ion-icon color="instagram" name="logo-instagram"></ion-icon>
				</button>
				<button (click)="share('whatsapp')" *ngIf="whatsapp" ion-fab>
					<ion-icon color="whatsapp" name="logo-whatsapp"></ion-icon>
				</button>
			</ion-fab-list>
		</ion-fab>`
})
export class RecipeShare implements OnChanges {

	public facebook: boolean = false;
	public twitter: boolean = false;
	public googleplus: boolean = false;
	public instagram: boolean = false;
	public whatsapp: boolean = false;
	public email: boolean = false;

	private _platformName: string;
	private _queried: boolean = false;

	private _supportedPlatforms: string[] = [
		'android',
		'ios',
		'mobileWeb'
	];

	@Input()
	recipe: Recipe;

	public constructor(private _social: SocialSharing, private _modalCtrl: ModalController, private _deviceSrvc: DeviceService) {
		this._platformName = this._deviceSrvc.platformName();
	}

	ngOnChanges(): void {
		if (!this._queried && this.recipe) {
			this.checkEmail();
			this.checkSocial(this.recipe, this._deviceSrvc.socialPackages());
		}
	}

	public visible(): boolean {
		return this._deviceSrvc.currentPlatformOneOf(this._supportedPlatforms);
	}

	public share(network: string): void {
		let modal = this._modalCtrl.create(ShareModal, {
			network: network,
			subject: this.recipe.title,
			message: this.recipe.description,
			imageUrl: this.recipe.sideBarImageUrl,
			url: `http://www.blendtec.com/recipes/${this.recipe.slug}`
		});
		modal.onDidDismiss(shareData => {
			console.log('sharing', shareData);
		});
		modal.present();
	}

	private checkSocial(recipe: Recipe, apps: any[]): void {
		if (this._deviceSrvc.isCordova()) {
			apps.forEach(app => {
				this._social.canShareVia(app.name, recipe.description, recipe.title, recipe.indexImageUrl, `http://www.blendtec.com/recipes/${recipe.slug}`)
					.then(result => {
						this[app.target] = result === 'OK';
						console.log('THIS', this);
					});
			});
		} else {
			apps.forEach(app => this[app.target] = true);
		}
		this._queried = true;
	}

	private checkEmail(): void {
		if(this._deviceSrvc.isCordova()) {
			this._social.canShareViaEmail()
				.then(result => this.email = result === 'OK');
		} else {
			this.email = true;
		}
	}
}
