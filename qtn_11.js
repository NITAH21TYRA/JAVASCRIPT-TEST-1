function splittedStringToArray(str) {
  if (typeof str !== 'string') {
    return 'Input must be a string';
  }

  return str.split(' ');
}

const sentence = "The life of a pregnant woman is always at stake";
const wordArray = splittedStringToArray(sentence);
console.log(wordArray); 