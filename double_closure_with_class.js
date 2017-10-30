'use strict';

class add {
  constructor() {
    this.adder1 = function(x, y) {
      
      if (y === undefined) {
        console.log("Require Second Argument, Adder2 returned");
        let adder2 = function(z) {
          return x+z;
        }
        return adder2;
      } else {
        return x+y;
      }
    }

    return this.adder1;
  }
}

let a = new add();
console.log(a);
console.log(a(1));
console.log(a(1)(5));
console.log(a(1,5));