//condition ? exprIfTrue : exprIfFalse

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true));//Output: $2.00
console.log(getFee(false));//Output: $10.00
console.log(getFee(null))//Output: $10.00

var age = 26;
var beverage = (age >= 21) ? "Alcohol" : "Juice";
console.log(beverage); //Alcohol

//inbuild Parameters
let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}
console.log(greeting({name: `Sahil`}));
console.log(greeting (null));

//Conditional Chains
function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

//Equivqlent to :

function example() {
    if (condition1) { return value1;}
    else if (condition2) {return value2;}
    else if (condition3) {return value3;}
    else {return value4;}
}
console.log(example)








































