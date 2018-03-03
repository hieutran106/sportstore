import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private repo: ProductRepository) {}

    getProducts(): Product[] {
        return this.repo.getProducts();
    }
    deleteProduct(id:number) {
        this.repo.deleteProduct(id);
    }
}