/*
    A closure is created when a function is defined inside another function, 
    and the inner function has access to variables from the outer function,
    even after the outer function has finished executing.
*/

function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Has access to outerVariable from outerFunction
  }

  return innerFunction;
}

const closure = outerFunction();
closure();  // Output: I am from the outer function

// use case1: data privacy
function secret() {
  let privateVar = "This is private";

  return function() {
    console.log(privateVar); // Access private variable
  };
}

const revealSecret = secret();
revealSecret();  // Output: This is private


// use case2: Function Factories
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy2(3));  // Output: 6
console.log(multiplyBy5(3));  // Output: 15


// use case3: Maintaining state
function counter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter());  // Output: 1
console.log(myCounter());  // Output: 2
