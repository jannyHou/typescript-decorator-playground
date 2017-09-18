## Class Decorator

> A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. 

### Modify constructor

- syntax

```js
@MyDecorator
class MyClass {

}
```

- decorator function
  - input: the instance's constructor
  - no return function

```js
function MyDecorator(constructor: Function) {
  // do something to constructor
  // not able to prove it works...
}
```
### Override contructor

TBD

### Decorator Factory

- syntax:

```js
@MyClassDecoratorFactory(...args: any[])
class MyClass {
    
}
```

- decorator function:
  - input: any number of arguments
  - return function: 
    - target(input): Function, the instance's constructor

```js
function MyClassDecoratorFactory(value: string) {
  return function (target: Function) {
      Reflect.defineMetadata("MyClassDecorator", value, target);
  }
}
```
