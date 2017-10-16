## Method Decorator

### Usages

- define/retrieve metada bound to a method

- modify a method's descriptor

### Function definition

A Method decorator is defined as:

```ts
function aMethodDec(target: Object, propertyKey: string | symbol, descriptpr: PropertyDescriptor): PropertyDescriptor | void {

}
```

#### input
 
  - `target`: either the Class or its prototype
  
    It's an `Object`(Or `Function`): 

      - `aClass.prototype` for non-static methods, its type is Object but not Function

      - `aClass` for static methods, its type is Function(so also Object)

  - `propertyKey`: the method's name
  
    It' a `string` or `symbol`(hmm, haven't tried) 

  - `descriptor`: the method's descriptor object

    The type of it is `PropertyDescriptor`.
    A method is also a property of a Class or its instance, 
    you can define or override it by `Object.defineProperty(obj, prop, descriptor)`

    To learn more about a property descriptor, check [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)


#### output

  - a new `propertyDescriptor` object OR void

    By modify a property descriptor, you can either return a new `propertyDescriptor` 
    or modify the original `propertyDescriptor` directly but don't return, 
    `__decorate()` handles either case.


### Examples

  - sample: demos how to override a descriptor

    This is an example based on TS official document,
    I modify it to decorator both a prototype method and a static method

    Check file `sample.ts` and run it with `npm run sample`

  - decorator-factory: 
  
    Demos how to consume the args provided by decorator factory in the returned methodDecorator type function.

    Check file `decorator-factory.ts` and run it with `npm run example-factory`