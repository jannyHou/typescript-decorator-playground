class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    @configurable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // modify desp directly and return a new desp both work, they are exchangable
        descriptor.enumerable = value;
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