import { Router, ActivatedRoute } from '@angular/router';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
@Component({
    moduleId: module.id,
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent {
	editing: boolean = false;
	product: Product = new Product();
	constructor(private repo: ProductRepository,
				private router: Router,
				activeRoute: ActivatedRoute) {
    
        this.editing=activeRoute.snapshot.params["mode"]=="edit";
        if (this.editing) {
            let productId=activeRoute.snapshot.params["id"];
            Object.assign(this.product,repo.getProduct(productId));
        }
    }
    save(form: NgForm) {
        this.repo.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }

}