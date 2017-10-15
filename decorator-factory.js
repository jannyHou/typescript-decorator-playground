"use strict";
// Code copy from https://blogs.msdn.microsoft.com/typescript/2015/04/30/announcing-typescript-1-5-beta/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function MyClassDecorator(value) {
    return function (target) {
        Reflect.defineMetadata("MyClassDecorator", value, target);
    };
}
let MyClass = class MyClass {
};
MyClass = __decorate([
    MyClassDecorator("my metadata")
], MyClass);
var myClass = new MyClass();
let value = Reflect.getMetadata("MyClassDecorator", myClass.constructor);
console.log(value); // outputs “my metadata”
