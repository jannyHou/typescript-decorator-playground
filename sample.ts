function log(target: Object, key: string, descriptor: PropertyDescriptor) {
    // target: 
    //   `myClass.prototype` for non-static methods, its type is Object but not Function
    //   `myClass` for static methods, its type is Function(so also Object)

    // key: 'foo'
    
    // descriptor: 
    //   the current descriptor: get by Object.getOwnPropertyDescriptor(target, key))

    // return a new descriptor
    let newD = <PropertyDescriptor> {};
    newD.value = function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            console.log('this: ' + this);
            var result = descriptor.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    return newD;

    // alternatively modify the descriptor directly
    // remember to copy the function if your new function calls it inside, to avoid circle functions invoke
    
    // let copyDesp = descriptor.value;
    // descriptor.value = function (...args: any[]) {
    //         console.log(args);
    //         var a = args.map(a => JSON.stringify(a)).join();
    //         // console.log('this: ' + this);
    //         var result = copyDesp.apply(this, args);
    //         var r = JSON.stringify(result);
    //         console.log(`Call: ${key}(${a}) => ${r}`);
    //         return result;
    //     }
}

class myClass {
    @log
    foo(n: number, m: number) {
      return n * m;
    }
    @log
    static bar(n: number) {
      return n*n;
    }
}

let inst = new myClass();
inst.foo(2, 3);

myClass.bar(2);