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
    console.log(formatString);
    // `Reflect.metadata` knows the target and propertyKey?!
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    console.log(target);
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

let inst = new Greeter('janny');
console.log(inst.greet());