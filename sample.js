var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, key, descriptor) {
    // target: 
    //   `myClass.prototype` for non-static methods, its type is Object but not Function
    //   `myClass` for static methods, its type is Function(so also Object)
    // key: 'foo'
    // descriptor: 
    //   the current descriptor: Object.getOwnPropertyDescriptor(target, key))
    // return a new descriptor
    var newD = {};
    newD.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = descriptor.value.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + key + "(" + a + ") => " + r);
        return result;
    };
    return newD;
}
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.foo = function (n, m) {
        return n * m;
    };
    myClass.bar = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], myClass.prototype, "foo", null);
    __decorate([
        log
    ], myClass, "bar", null);
    return myClass;
}());
var inst = new myClass();
inst.foo(2, 3);
myClass.bar(2);
