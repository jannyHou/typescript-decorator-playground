// Code copy and modify from https://www.typescriptlang.org/docs/handbook/decorators.html

function classDecorator<T extends {new(...args:any[]):{}}>(target:T) {
    return class extends target {
        lastName: string;
        constructor(...args: any[]){
            super(args);
            this.lastName = "override";
        };
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