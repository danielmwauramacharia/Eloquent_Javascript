// FizzBuzz Question

/*
// my solution
let num = 1;
while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0)
        console.log("FizzBuzz");
    else if (num % 3 == 0)
        console.log("Fizz");
    else if (num % 5 == 0)
        console.log("Buzz");
    else
        console.log(num)
    num++;
}
*/



// books given solution
/*
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
  */




// modified code , based on the book solution
for (let Num = 1; Num <= 100; Num++) {
    let output = ""
    if (Num % 3 == 0 && Num % 5 == 0) output += "FizzBuzz";
    else if (Num % 3 == 0) output += "Fizz";
    else if (Num % 5 == 0) output += "Buzz";
    console.log(output || Num)
} 