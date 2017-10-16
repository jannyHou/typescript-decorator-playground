## Property Decorator

### Usage

- define/retrieve metadata bound to a property

### Function definition

A Parameter decorator is defined as:

```ts
function aParameterDec(target: Object, propertyKey: string | symbol, parameterIndex: number): void {

}
```

#### input
 
  - `target`: either the Class or its prototype
  
    It's an `Object`(Or `Function`): 

      - `aClass.prototype` for parameters in non-static methods, its type is Object but not Function

      - `aClass` for parameters in static methods, its type is Function(so also Object)

  - `propertyKey`: the method's name
  
    It' a `string` or `symbol`(hmm, haven't tried) 

  - `parameterIndex`: the index of the parameter in the method's args

    It's a number

#### output

  - void


### Examples

  - sample: demos define/retrieve a metadata bound to a parameter

    This is an example based on TS official document.

    Check file `sample.ts` and run it with `npm run sample`

MORE DETAILS TBD

I would like to add more stuff in this branch to explain the `__param()` function,
also change sample to a simpler and reasonable one.