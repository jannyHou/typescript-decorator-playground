
# TypeScirpt Decorator

<!-- TOC -->

- [TypeScirpt Decorator](#typescirpt-decorator)
    - [References](#references)
    - [Pre-required knowledge](#pre-required-knowledge)
    - [What is a decorator](#what-is-a-decorator)
    - [What does it do?](#what-does-it-do)
        - [Reflect metadata](#reflect-metadata)
        - [Modify Class](#modify-class)
    - [How it works](#how-it-works)
        - [What happens underneath when declare a decorator](#what-happens-underneath-when-declare-a-decorator)
        - [Compile to ES6 JavaScript](#compile-to-es6-javascript)
        - [__decorate](#__decorate)
    - [Decorator factory](#decorator-factory)
    - [Branches](#branches)

<!-- /TOC -->

## References

https://www.typescriptlang.org/docs/handbook/decorators.html

http://blog.wolksoftware.com/decorators-reflection-javascript-typescript

https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator

I have read several awesome articles online talking about this new feature in TypeScript(a stage 2 proposal for JavaScript).

This repo is created as a note for my learning experience, with some branche based sample code for different decorator types.


## Pre-required knowledge

Better understand [reflect-metadata](https://github.com/rbuckton/reflect-metadata) first, but don't worry if you don't want to. 
Will explain it later.

## What is a decorator

Decorator is defined as a Function:

```js
function aDecorator(some_specific_magic_args) {
    
}

```
and used by syntax `@aDecorator`

You can consider decorator has 4 categories, 
they all aim at do something to/with a **ES6 Class**:

- Class Decorator

  applied to a Class

- Property Decorator

  applied to a Class's property

- Method Decorator

  applied to a Class's method(prototype/static)

- Parameter Decorator

  applied to a Class's method's parameter

Click [demo.ts](https://github.com/jannyHou/typescript-decorator-playground/blob/master/demo.ts) 
to get familiar with a decorator family

*Note: Decorator factory is a function that returns a specific decorator function,*
*but it's not the fifth category, IMO.*
*So forget about it now, will explain in section [decorator-factory](#decorator-factory).*

## What does it do? 

First usage: reflect metadata
Second usage: modify Class and its members

### Reflect metadata

Think it in this way: a Class has so many elements:

- constructor
- properties
- static methods
- prototype methods
- arguments of each method

And your project has multiple Classes, 
each of them has definitions of stuff above, 
and multiple instances,
now you want to give each element in each ClassDef/instance a unique ID,
then at run time you can define something with its ID and get that thing back(consume it) anytime by same ID.

How?

A node module called [`reflect-metadata`](https://github.com/rbuckton/reflect-metadata) provides you a system to map the unique ID to the metadata attached to it.

Then how to make the ID unique? Usually Reflect-metadata define the ID with:

- `target`
  
  target is either your Class(definition) or Class.prototype(instance)

- `propertyKey`
  
  propertyKey is the element' name

- `metadataKey`(optional)

  Q: my Class `Foo`'s method `Bar` needs N types of data, how can I give each of them an ID?
  A: use `metadataKey` to distinguish among them
  
And when you define a metadata it also takes in a `value` which is the data attached to the ID,
and that explains why a common call of Reflect-metadata's api looks like

`Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);`

Or

`Reflect.getMetadata(metadataKey, target, propertyKey);`


**What is the relation between a decorator and Reflect-metadata?**

By appling a decorator function to a Class's element, 
compiler passes at least the element's `target`, `propertykey` to the decorator function as its arguments, 
then inside the function you can use them to play with `reflect-metadata`.

### Modify Class

**Only for Class decorator and Method decorator.**

- Class decorator
    
    modify/override Class constructor

- Method decorator
 
    modify/override the property descriptor of the method

    *If this confuses you, learn javascript's `Object.defineProperty` function*


## How it works

### What happens underneath when declare a decorator

Before understand how a decorator works, you may wonder by declaring a typescript decorator,
what happens underneath? What is the equivalent JavaScript code it gets compiled to?

Run `npm tsc` to compile `demo.ts` to its JavaScript version.

Open `demo.js`, you can see the Class `User` is defined without decorator syntax `@`, 
and all your decorator functions are applied by a function 
`__decorator([<array_of_decFuns>], target, propertyKey, descriptor)`
after the Class definition.

### Compile to ES6 JavaScript 

Take the Class `User` which contains a decorator family as an example:

TypeScript syntax:

```ts
@classDec
@classDecFactory('class decorator factory')
class User {
  @propertyDec  
  firstName: string;
  @propertyDecFactory('property decorator factory')
  lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
  
  @methodDec
  @methodDecFactory('method decorator factory')
  printName(
      @paramDec middleName?: string, 
      @paramDecFactory('parameter decorator factory') nickName?: string
  ) {
    console.log('User name is ' + this.firstName + ' ' + middleName + this.lastName + '\n');
    if (nickName) console.log('NickName is ' + nickName);
  }

}
```

JavaScript code it compiles to:

```js
let User = class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printName(middleName, nickName) {
        console.log('User name is ' + this.firstName + ' ' + middleName + this.lastName + '\n');
        if (nickName)
            console.log('NickName is ' + nickName);
    }
};
__decorate([
    propertyDec
], User.prototype, "firstName", void 0);
__decorate([
    propertyDecFactory('property decorator factory')
], User.prototype, "lastName", void 0);
__decorate([
    methodDec,
    methodDecFactory('method decorator factory'),
    __param(0, paramDec),
    __param(1, paramDecFactory('parameter decorator factory'))
], User.prototype, "printName", null);
User = __decorate([
    classDec,
    classDecFactory('class decorator factory')
], User);
```

Compare the two snippets above, you can find two Class decorators 
`classDec` and `classDecFactory`:

```ts
@classDec
@classDecFactory('class decorator factory')
class User { 
    ... ...
}
```

And in the complied code they are passed into `__decorate()` in sequence(sequence is important) 
as the first array parameter and applied as:

```js
User = __decorate([
    classDec,
    classDecFactory('class decorator factory')
], User);
```

The same for the other 3 types of decorator.

**This repository has branches for each type of decorator,** 
**they explain and help you understand how to use a specific decorator.**
So don't think too much about the inputs of those `__decorate()` functions now.

### __decorate

Syntax of `__decorate`:

```js
__decorate([<array_of_decFuns>], target, propertyKey, descriptor) {
    
}
```

`__decorate` takes in:

  - a `target` 
  - a `propertyKey` (optional)
  - a `descriptor` (optional more frequently)

and applies the decorator functions in array iteratively. 
If you still remember the relation between decorator and Reflect-metadata 
that we discussed in section [What does it do](#what-does-it-do), 
then now you understand how a decorator function knows the `target`, `propertyKey`:
`__decorate()` tells it.

If you are interested in digging more into the implementation of `__decorate()`, 
check this awesome article http://blog.wolksoftware.com/decorators-reflection-javascript-typescript

## Decorator factory

A decorator factory is always used when you have addional arguments needed in a decorator function, but cannot passed in directly by appending them as the 5th, 6th, ... input of the decorator function.

An example would be a Class factory decorator in 
[branch#class/decorator: decorator-factory.ts](https://github.com/jannyHou/typescript-decorator-playground/blob/class/decorator/decorator-factory.ts)

## Branches

There are five branches in this repo for you to learn each decorator type and try it out.

Please checkout:

- class/decorator
- method/decorator
- property/decorator
- parameter/decorator
- decorator-composition

