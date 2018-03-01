import {Injectable, Inject} from "@angular/core";
import {Product} from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount:number = 0;
    public cartPrice:number = 0 ;
}
export class CartLine {
    constructor(public product:Product, public quality:number) {

    }
    get lineTotal():number {
        return this.product.price*this.quality;
    }
}