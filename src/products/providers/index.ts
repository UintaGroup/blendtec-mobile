import { CategoryService } from "./category.service";
import { ProductService } from "./product.service";

export {
	CategoryService,
	ProductService
}

export const PRODUCT_PROVIDERS = [
	CategoryService,
	ProductService
]