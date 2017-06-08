export class NavItem {
	constructor(private _title: string, private _page: any, private _params?: object) {
	}

	public get title(): string {
		return this._title;
	}

	public get page(): any{
		return this._page;
	}

	public get params(): object {
		return this._params;
	}
}
