## Class Decorator

Copied from TypeScript's official decorator document:

> A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. 

### Function definition

A Class decorator is defined as:

```ts
function aClassDec<TFunction extends Function>(target: TFunction): TFunction | void {

}
```

#### input
 
  - `target`: the Class's constructor function

    *Well, it's more like the Class Object to me, but officially it's documented as constructor function...*
    *Leave it as a question*

    This funcion only has one input argument, which serves as `target`.
    When retrieve/define metadata to a Class itself, there is no `propertyKey`.

    You may wonder, then how to specify `value` or `metadataKey` to retrieve/define the metadata?
 
    The answer is use decorator factory.

#### output

  - a Class extends `target` OR void

    By modify a Class constructor, 
    you can either return a Class extends the `target`(original Class) 
    or modify the `target` directly but don't return, `__decorate()` handles either case.


### Examples

  - seal-constructor: demos how to change a constructor

    This is an example based on TS official document,
    the origin example is to demo a decorator function modifies the constructor directly
    but doesn't return, well the code doesn't work for me...

    Original code is simple:

    ```ts
      function sealed(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
      }
    ```

    To make it work I have to change it to return an extended Class.

    Check file `seal-constructor.ts` and run it with `npm run example-seal`

  - override-constructor: demos how to extends a Class

    Check file `override-constructor.ts` and run it with `npm run example-override`

  - decorator-factory: demos how to define a metadata bound to `target` Class

    Please note that "use metadata" and "argument Class" are demoed separately 
    DOES NOT mean you cannot do both in a single decorator functon. 
    Examples are written in this way just to avoid multiple usages make reader confused.

    A decorator factory is always used when you have addional arguments needed in a decorator function,
    but cannot passed in directly by appending them as the 5th, 6th, ... input of the decorator function.

    Check file `decorator.ts` and run it with `npm run example-factory`
