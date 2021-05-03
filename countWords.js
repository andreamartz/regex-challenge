// Write a function wordCount that takes a string parameter named sentence . The function should return
// the count of words in the sentence parameter string. A word is considered any series of characters
// (letter, number, punctuation) separated by one or more spaces.

function wordCount(sentence) {
  const sentArr = sentence.split(' ');
  // console.log("SENTARR: ", sentArr);
  const validArr = [];
  
  const regex = /[a-zA-Z0-9,;:!?"'\.]+/g;
  
  for (let i = 0; i < sentArr.length; i++) {
    // console.log(sentArr[i], regex.test(sentArr[i]));
    if (regex.test(sentArr[i])) {
      validArr.push(sentArr[i]);
    }
    // console.log(validArr, validArr.length);
  }
  
  return validArr.length;
}

console.log(wordCount('This is a short sentence!'));
// console.log(wordCount('ThisIsA!$ReallyLongWord'));
// wordCount(‘This is a short sentence!’); // returns 5
// wordCount(‘ThisIsA!$ReallyLongWord’); // returns 1
// wordCount(‘ ‘); // returns 0