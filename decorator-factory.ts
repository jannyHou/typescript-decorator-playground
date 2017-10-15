class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    // in a property descriptor object, they both default to `false`
    // here we override the value by applying decorators
    @enumerable(true)
    @configurable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // modify desp directly or return a new desp both work, they are exchangable
        let newDesp = descriptor;
        newDesp.enumerable = value;
        return newDesp;
    };
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

let inst2 = new Greeter('hello');
let desp = Object.getOwnPropertyDescriptor(Greeter.prototype, 'greet');
console.log('configurable: ' + desp.configurable);
console.log('enumerable: ' + desp.enumerable);