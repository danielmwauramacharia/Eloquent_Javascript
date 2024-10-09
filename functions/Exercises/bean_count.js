function countChar(str, ch) {
    let count = 0;
    for (let length = 0; length < str.length; length++) {
        if (str[length] === ch)
            count++;
    }
    return count;
}

console.log(countChar("Abracadabra", "b"));