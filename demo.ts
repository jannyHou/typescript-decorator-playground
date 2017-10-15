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

function classDec<TFunction extends Function>(target: TFunction): TFunction | void {
  // a dummy funtion
}

function classDecFactory(name: string) {
    printEvaludated(name);
    return classDec;
}

function propertyDec(target: Object, propertyKey: string) {
  // a dummy funtion
}

function propertyDecFactory(name: string) {
    printEvaludated(name);
    return propertyDec;
}

function methodDec(target: Object, propertyKey: string, desp: PropertyDescriptor): PropertyDescriptor | void {
  // a dummy funtion
}

function methodDecFactory(name: string) {
    printEvaludated(name);
    return methodDec;
}

function paramDec(target: Object, propertyKey: string, paramIndex: number) {
  // a dummy funtion
}

function paramDecFactory(name: string) {
    printEvaludated(name);
    return paramDec;
}

/** Util functions */

function printEvaludated(factoryName: string) {
  console.log(factoryName + ' evaluated');
}