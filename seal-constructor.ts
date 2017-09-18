// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html

function sealed<T extends {new (...args: any[]):{}}>(target: T) {
    let val = class extends target {
        constructor(...args: any[]) {
            super(args);
            Object.seal(this);
        }
    };
    // Object.seal(val);
    // Object.seal(val.prototype);
    return val;
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
console.log("Before");
console.log(inst);
// well.... I am not sure how to make this example work
delete inst.greeting;
// inst.deleteGreeting();
// unfortunately it's deleted :(
console.log("After");
console.log(inst);


// let inst2 = {foo: 1};
// Object.seal(inst2);
// delete inst2.foo;
// console.log(inst2);
