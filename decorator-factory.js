var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        enumerable(true),
        configurable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        // modify desp directly and return a new desp both work, they are exchangable
        descriptor.enumerable = value;
    };
}
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
var inst2 = new Greeter('hello');
var desp = Object.getOwnPropertyDescriptor(Greeter.prototype, 'greet');
console.log('configurable: ' + desp.configurable);
console.log('enumerable: ' + desp.enumerable);
