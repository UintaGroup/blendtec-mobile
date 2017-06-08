import { Observable } from 'rxjs/Observable';

export class RecipeCategoryServiceMock {
	public static instance(): any {
		let instance = jasmine.createSpyObj('RecipeCategoryService', ['all']);
		instance.all.and.returnValue(Observable.of([]));

		return instance;
	}
}