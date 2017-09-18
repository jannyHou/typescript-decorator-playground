// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        lastName = "override";
    }
}

@classDecorator
class Name {
    firstName = "janny";
    lastName: string;
    constructor(m: string) {
        this.lastName = m;
    }
    printName() {
        return this.firstName +  ' ' + this.lastName;
    }
}

let myName = new Name("myLastName");
console.log(myName.printName());