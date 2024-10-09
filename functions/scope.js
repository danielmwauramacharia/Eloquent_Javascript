// learning the scope of bindings
const halve = function (n) {
    return n / 2;
};

let n = 10; // within the block, therefore global
console.log(halve(1000)); // local to the function
console.log(n);