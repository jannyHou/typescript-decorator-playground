import "reflect-metadata";

const formatMetadataKey = Symbol("format");

class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}

function format(formatString: string) {
    return function(target: any, propertyKey: string) {
        Reflect.defineMetadata(formatMetadataKey, formatString, target, propertyKey);
    }
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

let inst = new Greeter('janny');
console.log(inst.greet());