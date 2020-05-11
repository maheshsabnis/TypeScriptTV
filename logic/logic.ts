import {Product} from './product';
class Logic {
    private products: Array<Product>;
    constructor(){
        this.products = new Array<Product>();

        this.products.push(new Product(101, 'P1', 'C1'));
        this.products.push(new Product(102, 'P2', 'C2'));
        this.products.push(new Product(103, 'P3', 'C3'));
    }
    getProducts(): Array<Product> {
        return this.products;
    }
    saveProduct(prd: Product): Array<Product> {
        this.products.push(prd);
        return this.products;
    }
}

let logic = new Logic();
console.log(JSON.stringify(logic.getProducts()));
console.log(JSON.stringify(logic.saveProduct(new Product(104, 'P4', 'C4'))));
