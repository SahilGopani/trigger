const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`);


//Unicode
function getCharacterLength (str) {
    // The string iterator that is used here iterates over characters,
    //  not mere code units
    return [...str].length;
  }
  
  console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3
  
  // While not recommended, you could add this to each string as follows:
  
  Object.defineProperty(String.prototype, 'charLength', {
    get () {
      return getCharacterLength(this);
    }
  });
  
  console.log('A\uD87E\uDC04Z'.charLength); // 3
  
