let size = 8;
let space = " ";
let hash = "#";
for (let num = 1; num <= size; num++){
    let output = "";
    let i = 0;
    if (num % 2 == 0){
        while (i <= 3){
            output += hash + space;
            i++;
        } 
    }
    else{
        while (i <= 3){
            output += space + hash;
            i++;
        } 
    }
    console.log(output);
}