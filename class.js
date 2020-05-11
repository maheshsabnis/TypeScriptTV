var MyCalss = /** @class */ (function () {
    // private x:number;
    // private y:number;
    // constructor(x:number, y:number){
    //     this.x = x;
    //     this.y = y;
    // }
    function MyCalss(x, y) {
        this.x = x;
        this.y = y;
    }
    MyCalss.prototype.add = function () {
        return this.x + this.y;
    };
    MyCalss.prototype.mult = function () {
        return this.x * this.y;
    };
    // rest parameters
    MyCalss.prototype.addNumber = function (p) {
        var sum = 0;
        if (p.length > 0) {
            p.forEach(function (n, i) {
                sum += n;
            });
        }
        return sum;
    };
    return MyCalss;
}());
var objO = new MyCalss(10, 20);
console.log("2 parameters " + objO.addNumber(2, 3));
console.log("3 parameters " + objO.addNumber(2, 3, 4));
console.log("4 parameters " + objO.addNumber(2, 3, 4, 5));
console.log("5 parameters " + objO.addNumber(2, 3, 4, 5, 6));
console.log("Add = " + objO.add());
console.log("Mult = " + objO.mult());
