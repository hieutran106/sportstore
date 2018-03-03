import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from "@angular/core";
@Component({
    moduleId: module.id,
    templateUrl: "orderTable.component.html"
})
export class OrderTableComponent { 
    includeShipped = false;
    constructor(private repo: OrderRepository) {

    }
    getOrders(): Order[] {
        return this.repo.getOrders()
                .filter(o => this.includeShipped || !o.shipped);
    }
    markShipped(order: Order) {
        order.shipped=true;
        this.repo.updateOrder(order);
    }
    delete(id:number) {
        this.repo.deleteOrder(id);
    }
}