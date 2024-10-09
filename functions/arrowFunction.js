/*
    instead of function keyword we use arrow
    It expresses something like “this input (the parameters) produces this
    result (the body)”
*/

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10)) //1024

// when a function has one parameter the parentheses can be ommitted
const square = x => x * x;
console.log(square(6)); // 36

// Function with no parameters use empty parentheses
const horn = () => {
    console.log("Toot");
};
horn();