import { OrderRepository } from './../model/order.repository';
import { Component } from "@angular/core";
import { Order } from '../model/order.model';
import { NgForm } from '@angular/forms';
@Component({
    moduleId: module.id,
    templateUrl:"checkout.component.html",
    styleUrls:["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted:boolean = false;
    constructor(public respository: OrderRepository,
                public order:Order) {

    }
    submitOrder(form:NgForm) {
        this.submitted=true;
        if (form.valid) {
            this.respository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent=true;
                this.submitted=false;
            })
        }
    }
 }