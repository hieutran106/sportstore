import { AuthService } from './auth.service';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {Cart} from "./cart.model";
import { HttpModule } from '@angular/http';

@NgModule({
    imports:[HttpModule],
    providers:[ProductRepository,Cart,
    Order, OrderRepository,
    {provide:StaticDataSource, useClass:RestDataSource},
    RestDataSource, AuthService]
})
export class ModelModule {}