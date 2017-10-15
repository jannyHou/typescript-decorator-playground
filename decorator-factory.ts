// Code copy from https://blogs.msdn.microsoft.com/typescript/2015/04/30/announcing-typescript-1-5-beta/

import "reflect-metadata";

function MyClassDecorator(value: string) {
  return function (target: Function) {
      Reflect.defineMetadata("MyClassDecorator", value, target);
  }
}

@MyClassDecorator("my metadata")
class MyClass { }

var myClass = new MyClass();
let value: string = Reflect.getMetadata("MyClassDecorator", myClass.constructor);
console.log(value); // outputs “my metadata”

