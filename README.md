## PLEASE NOTE NO CODE OR CITED PARAGRAPHS ARE CREATED BY ME 

I have read several awesome articles online talking about this new feature in TypeScript(also a stage 2 proposal for JavaScript).

This repo is created as a note for my learning experience, with some branche based sample code for different decorator types.

References:

https://www.typescriptlang.org/docs/handbook/decorators.html

http://blog.wolksoftware.com/decorators-reflection-javascript-typescript

https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator

## Pre-required knowledge

What is it used for?

  - Learn Reflect-metadata

## What is a decorator

Decorator is defined as a Function:

```js
function aDecorator(some_specific_magic_args) {
    
}

```
and used by syntax `@aDecorator`

You can consider decorator has 4 categories, 
they all aim at do something to a **ES6 Class**:

- Class Decorator

  applied to a Class

- Property Decorator

  applied to a Class's property

- Method Decorator

  applied to a Class's method(prototype/static)

- Parameter Decorator

  applied to a Class's method's parameter

Click [demo.ts](demo.ts) to see a decorator family

*Note: Decorator factory is a function that returns a specific decorator function,*
*but it's not the fifth category.*
*Forget about it, will explain it later.*

## What do they do? 

### Reflect-metadata

Think of your Class as a javascript Object, it has so many elements:

- constructor
- properties
- static methods
- prototype methods
- arguments of each method

Your project has multiple Classes, 
each of them has definitions of stuff above, 
and multiple instances,
now you want to give each element in each ClassDef/instance a unique ID,
then at run time you can define something with its ID and get that thing back(consume it) anytime by same ID.

How?

Reflect-metadata provides you a system to map the unique ID to the data attached to it.

Then how to make the ID unique? Usually Reflect-metadata define the ID with:

- target
  
  target is either your Class(definition) or Class.prototype(instance)

- propertyKey
  
  propertyKey is the element' name

- metadataKey(optional)

  Q: my Class Foo's method Bar needs N types of data, how can I give each of them an ID?
  A: use metadataKey to distinguish among them
  
And when you define a metadata it also takes in a `value` which is the data attached to the ID,
and that explains why a common call of Reflect-metadata's api looks like

`Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);`

Or

`Reflect.getMetadata(metadataKey, target, propertyKey);`


**What is the relation between a decorator and Reflect-metadata?**

By appling a decorator function to a Class's element, 
ES6 passes at least the element's `target`, `propertykey` to the decorator function as its arguments, 
then inside the function you can use them to play with Reflect-metadata.

### Modify Class

Only for Class decorator and Method decorator.

- Class decorator
    
    modify/override Class constructor

- Method decorator
 
    modify/override the property descriptor of the method
    
    *If this confuses you, learn javascript's `Object.defineProperty` function*