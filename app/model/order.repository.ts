import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';
@Injectable()
export class OrderRepository {
    private orders: Order[]=[];
    private loaded: boolean = false;
    constructor(private dataSource: RestDataSource) {}
    loadOrders() {
        this.loaded=true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders=orders);
    }
    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
            .subscribe(order => {
                let index=this.orders.findIndex(o => o.id == order.id);
                this.orders.splice(index,1,order);
            });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id));
        });
    }
    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}