// Function that takes two arguments and returns thier minimum

// arrow way
const minimun = (a, b) => {
    if (a > b) return b;
    else return a;
};

console.log(minimun(10, 5));

//declaration way
console.log(mini(10, 5));
function mini(x, y) {
    if (x > y) return y;
    else return x;
}

// binding method
const  mins = function(c, d) {
    if (c > d) return d;
    else return c;
}
console.log(mins(10, 5));