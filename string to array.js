const str = 'I will be rich and so do HINATA.';
const words = str.split(' ');
console.log(words[3]);//rich
const chars = str.split('');
console.log(chars[8]);//e
const strCopy = str.split();
console.log(strCopy);//[ 'I will be rich and so do HINATA.' ]



//string to array using function
function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
  
    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
  }
  
  const tempestString = 'Oh brave new world that has such people in it.'
  const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
  
  const space = ' '
  const comma = ','
  
  splitString(tempestString, space)
  splitString(tempestString)
  splitString(monthString, comma)
  