// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
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
console.log(inst);
// well.... I am not sure how to make this example work
inst.deleteGreeting();
// unfortunately it's deleted :(
console.log(inst);
