/*
    This functions are moved at the top of the scope
    doesnt follow the top-bottom execution approach
*/

function square(x) {
    return x * x;
}// no semicolon needed at the end of the function


// scope of function declaration
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars"
}