## Property Decorator

### Usage

- define/retrieve metadata bound to a property

### Function definition

A Property decorator is defined as:

```ts
function aPropertyDec(target: Object, propertyKey: string | symbol): void {

}
```

#### input
 
  - `target`: either the Class or its prototype
  
    It's an `Object`(Or `Function`): 

      - `aClass.prototype` for non-static properties, its type is Object but not Function

      - `aClass` for static properties, its type is Function(so also Object)

  - `propertyKey`: the method's name
  
    It' a `string` or `symbol`(hmm, haven't tried) 

#### output

  - void


### Examples

  - sample: demos define/retrieve a metadata bound to a property

    This is an example based on TS official document.

    Check file `sample.ts` and run it with `npm run sample`