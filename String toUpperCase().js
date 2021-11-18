const sent = 'There will be a singlr day when everything will be in undercontrol';
console.log(sent.toUpperCase());

//short single line method 
console.log('sahil'.toUpperCase());

//Conversion of the Non-string this values to strings
const a = String.prototype.toUpperCase.call({
    toString: function toString() {
      return 'abcdef';
    }
  });
  
  const b = String.prototype.toUpperCase.call(true);
  
  // prints out 'ABCDEF TRUE'.
  console.log(a, b);
  