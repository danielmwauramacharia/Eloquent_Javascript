// extra arguments passed during the function calling are ignored
function square(x) {
    return x *x;
}
console.log(square(4, "hog", true)); // 16

//few arguments passed, the un-assigned parameters get value of undefined
function minus(a, b) {
    if (b == undefined) return -a;
    else return a - b;
}

console.log(minus(10)); //-10
console.log(minus(10, 5)); //5

// default parameters: if argument is not given, default is used
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
    }
console.log(power(4));// → 16
console.log(power(2, 6)); // → 64
