for (let i = 0; i < 5; i++){
    console.log("Walking east one step");
}

//do while
let i = 0;
do {
    i+=1;
    console.log(i);
}while (i < 5);

//while statement
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}
console.log(x)

//break statement
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue){
        break;
    }
}