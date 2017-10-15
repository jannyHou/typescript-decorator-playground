var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function classDec(target) {
}
function classDecFactory(name) {
    printEvaludated(name);
    return classDec;
}
function propertyDec(target, propertyKey) {
}
function propertyDecFactory(name) {
    printEvaludated(name);
    return propertyDec;
}
function methodDec(target, propertyKey, desp) {
}
function methodDecFactory(name) {
    printEvaludated(name);
    return methodDec;
}
function paramDec(target, propertyKey, paramIndex) {
}
function paramDecFactory(name) {
    printEvaludated(name);
    return paramDec;
}
/** Util functions */
function printEvaludated(factoryName) {
    console.log(factoryName + ' evaluated');
}
