// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(target) {
    return class sealedTarget extends target {
        constructor(...args) {
            super(args);
            Object.seal(this);
        }
    };
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    deleteGreeting() {
        delete this.greeting;
    }
};
Greeter = __decorate([
    sealed
], Greeter);
let inst = new Greeter('janny');
console.log("Before delete property `greating`: ");
console.log(inst);
// returns error
// inst.deleteGreeting(); 
// silently ignore
delete inst.greeting;
console.log("After delete property `greating`: ");
console.log(inst);
