/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
export class ConfigMock {

	public get(): any {
		return '';
	}

	public getBoolean(): boolean {
		return true;
	}

	public getNumber(): number {
		return 1;
	}

	public setTransition(any?: any): any {}
}

export class FormMock {
	public register(): any {
		return true;
	}
}

export class PlatformMock {
	public ready(): Promise<{String}> {
		return new Promise((resolve) => {
			resolve('READY');
		});
	}

	public registerBackButtonAction(fn: Function, priority?: number): Function {
		return (() => true);
	}

	public hasFocus(ele: HTMLElement): boolean {
		return true;
	}

	public doc(): HTMLDocument {
		return document;
	}

	public is(): boolean {
		return true;
	}

	public getElementComputedStyle(container: any): any {
		return {
			paddingLeft: '10',
			paddingTop: '10',
			paddingRight: '10',
			paddingBottom: '10',
		};
	}

	public onResize(callback: any) {
		return callback;
	}

	public registerListener(ele: any, eventName: string, callback: any): Function {
		return (() => true);
	}

	public win(): Window {
		return window;
	}

	public raf(callback: any): number {
		return 1;
	}

	public timeout(callback: any, timer: number): any {
		return setTimeout(callback, timer);
	}

	public cancelTimeout(id: any) {
		// do nothing
	}

	public getActiveElement(): any {
		return document['activeElement'];
	}
}

export class TranslateServiceMock {
	public get(key: string): Observable<any> {
		return Observable.of({});
	}
}

@Pipe({name:'translate'})
export class TranslatePipeMock implements PipeTransform {
	public transform(): string{
		return '';
	}
}

export class NavMock {

	public pop(): any {
		return new Promise(function(resolve: Function): void {
			resolve();
		});
	}

	public push(): any {
		return new Promise(function(resolve: Function): void {
			resolve();
		});
	}

	public getActive(): any {
		return {
			'instance': {
				'model': 'something',
			},
		};
	}

	public setRoot(): any {
		return true;
	}
}



export class MenuMock {
	public close(): any {
		return new Promise((resolve: Function) => {
			resolve();
		});
	}
}

/* tslint:enable */