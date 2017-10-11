// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html

function sealed<T extends {new (...args: any[]):{}}>(target: T) {
    // target: Class Greeter

    // return a new Class
    return class sealedTarget extends target {
        constructor(...args: any[]) {
            super(args);
            Object.seal(this);
        }
    };
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    deleteGreeting() {
        delete this.greeting;
    }
}

let inst = new Greeter('janny');

console.log("Before delete property `greating`: ");
console.log(inst);
// returns error
// inst.deleteGreeting(); 

// silently ignore
delete inst.greeting;
console.log("After delete property `greating`: ");
console.log(inst);
