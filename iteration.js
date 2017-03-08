function countLetters (string) {
  var string = string.split(" ").join("");
  var string = string.toLowerCase();
  var stringObject = {};

  for (var i = 0; i < string.length; i++){
    var letter = string[i];

    if (stringObject[letter]){
      stringObject[letter].push(i);

    }else{
      stringObject[letter] = [i];
    }
  }
  return stringObject;
};

console.log(countLetters("lighthouse in the house"));



