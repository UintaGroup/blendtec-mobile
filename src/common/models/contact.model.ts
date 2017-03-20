export class Contact {
	private _firstName: string;
	public get firstName(): string {
		return this._firstName;
	}

	public set firstName(value: string) {
		this._firstName = value;
	}

	private _lastName: string;
	public get lastName(): string {
		return this._lastName;
	}

	public set lastName(value: string) {
		this._lastName = value;
	}

	private _message: string;
	public get message(): string {
		return this._message;
	}

	public set message(value: string) {
		this._message = value;
	}

	private _email: string;
	public get email(): string {
		return this._email;
	}

	public set email(value: string) {
		this._email = value;
	}

	private _phone: string;
	public get phone(): string {
		return this._phone;
	}

	public set phone(value: string) {
		this._phone = value;
	}

	private _textPreferred: boolean;
	public get textPreferred(): boolean {
		return this._textPreferred;
	}

	public set textPreferred(value: boolean) {
		this._textPreferred = value;
	}
}