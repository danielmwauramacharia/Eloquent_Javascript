//recursion to check eveness
function isEven(num) {
    if (num < 0) num = Math.abs(num);
    else if (num === 0) return true;
    else if (num === 1) return false;
    return isEven(num - 2);
}

console.log(isEven(-2));