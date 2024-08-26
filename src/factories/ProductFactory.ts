import { Product } from "types/types";

export class ProductFactory {
    static create(
        discount?: any,
        id?: any,
        name?: any,
        quantity?: any,
        price?: any
    ): Product {
        return {
            discount: discount !== undefined ? discount : 0,
            id: id || Date.now().toString(),
            name: name || "",
            quantity: quantity !== undefined ? quantity : 1,
            price: price !== undefined ? price : 0,
        };
    }
}
