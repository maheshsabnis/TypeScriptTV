"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var Logic = /** @class */ (function () {
    function Logic() {
        this.products = new Array();
        this.products.push(new product_1.Product(101, 'P1', 'C1'));
        this.products.push(new product_1.Product(102, 'P2', 'C2'));
        this.products.push(new product_1.Product(103, 'P3', 'C3'));
    }
    Logic.prototype.getProducts = function () {
        return this.products;
    };
    Logic.prototype.saveProduct = function (prd) {
        this.products.push(prd);
        return this.products;
    };
    return Logic;
}());
var logic = new Logic();
console.log(JSON.stringify(logic.getProducts()));
console.log(JSON.stringify(logic.saveProduct(new product_1.Product(104, 'P4', 'C4'))));
