import { Cart } from './../model/cart.model';
import { Component } from "@angular/core";
@Component({
    moduleId: module.id,
    templateUrl:"cartDetail.component.html"
    
})
export class CartDetailComponent {
    constructor(public cart:Cart) { }
}