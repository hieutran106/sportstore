import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";

@Component({
    selector:"store",
    moduleId: module.id,
    templateUrl:"store.component.html"
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage=4;
    public selectedPage=1;
    constructor(private repository: ProductRepository) {

    }
    get products():Product[] {
        let beginIndex=(this.selectedPage-1)*this.productsPerPage;
        let endIndex = beginIndex+this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
                .slice(beginIndex,endIndex);
    }
    get categories():string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory=newCategory;
    }
    changePage(newPage:number) {
        this.selectedPage=newPage;
    }
    changePageSize(newSize:number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageNumbers():number[] {
        let pageNumber=Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage);
        return Array(pageNumber).fill(0).map((value,index) => index+1);
    }
}