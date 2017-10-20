/**
 * Question : How would you make this work?
 * add(2, 5); // 7
 * add(2)(5); // 7
 */

let f1 = function() {
  function adder1(a, b) {
    function adder2(x) {
      return a + x;
    }

    if (b === undefined) {
      return adder2;
    } else {
      return a + b;
    }
  }
  return adder1;
}

var add = f1();
console.log(add(2,5));
console.log(add(2)(5));
