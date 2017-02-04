export abstract class BaseModel {
	constructor(private fields: any) {
		for (let f in fields)
			this['_'+f] = fields[f];
	}
}
