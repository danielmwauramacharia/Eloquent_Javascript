// No parameter Function
const makeNoise = function () {
    console.log("Ping!");
};

makeNoise();


// Function with multiple parameters
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result
}

console.log(power(2, 10)); // calling the function with arguments

const halve = function (n) {
    return n / 2;
};

let n = 10;
console.log(halve(1000));
console.log(n);