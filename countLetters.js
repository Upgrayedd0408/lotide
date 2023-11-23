const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let results = {};
  for (const letter of sentence) {
    if (letter.match(/[a-z]/i)) {
      let lowerCaseLetter = letter.toLowerCase();
      if (results[lowerCaseLetter]) {
        results[lowerCaseLetter] += 1;
      } else {
        results[lowerCaseLetter] = 1;
      }
    }
  }
  return results;
};




console.log(countLetters("Lighthouse in the house"));
