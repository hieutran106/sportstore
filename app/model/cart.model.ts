import {Injectable, Inject} from "@angular/core";
import {Product} from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount:number = 0;
    public cartPrice:number = 0;

    addLine(product: Product, quantity:number=1)  {
        let line= this.lines.find(line => line.product.id==product.id);
        if (line!=undefined) {
            line.quantity+=quantity;
        } else {
            let newLine=new CartLine(product,quantity);
            this.lines.push(newLine);
        }
        this.recalculate();
        console.log("Hello"+this.itemCount);
    }
    updateQuantity(product:Product, quantity:number) {
        let line= this.lines.find(line => line.product.id==product.id);
        if (line!=undefined) {
            let newQuantity=Number(quantity);
            if (newQuantity>0) {
                line.quantity=Number(quantity);
            } else {
                line.quantity=0;
            }
        }
        this.recalculate();
    }
    removeLine(id:number) {
        let index = this.lines.findIndex(line => line.product.id==id);
        this.lines.splice(index);
        this.recalculate();
    }
    clear() {
        this.lines=[];
        this.itemCount=0;
        this.cartPrice=0;
    }
    private recalculate() {
        this.itemCount=0;
        this.cartPrice=0;
        this.lines.forEach(line =>{
            this.itemCount+=line.quantity;
            this.cartPrice+=line.lineTotal;
        })
    }
}
export class CartLine {
    constructor(public product:Product, public quantity:number) {

    }
    get lineTotal():number {
        return this.product.price*this.quantity;
    }
}