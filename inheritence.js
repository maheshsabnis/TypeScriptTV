var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass(n) {
        this.n = n;
    }
    // protected is accessible in derive class using 'this'
    BaseClass.prototype.display = function () {
        console.log("n = " + this.n);
    };
    return BaseClass;
}());
var DeriveClass = /** @class */ (function (_super) {
    __extends(DeriveClass, _super);
    function DeriveClass(v) {
        var _this = _super.call(this, v) || this;
        _this.v = v;
        return _this;
    }
    DeriveClass.prototype.caller = function () {
        this.display();
    };
    return DeriveClass;
}(BaseClass));
var d = new DeriveClass(100);
d.caller();
