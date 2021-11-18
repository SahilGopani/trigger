const para = "Soon I'll find myself HINATA, and that day will be the best Day of my Life :)"
const searchTerm = "HINATA";
const indexOfFirst = para.indexOf(searchTerm);
console.log(`Your favourite kind of Person which is "${searchTerm}" is on "${indexOfFirst}" Position` );
//if want to check the given name repeated or not
console.log(`The index of the 2nd "${searchTerm}" is ${para.indexOf(searchTerm, (indexOfFirst + 1))}`);// Output will be -1 because there is no Other HINATA then one

//Using IndexOf()
const str = 'Finding Something Really important to Live'

console.log('Index of first w from start is ' + str.indexOf('i'))
console.log('Index of "new" from start is ' + str.indexOf('important'))
