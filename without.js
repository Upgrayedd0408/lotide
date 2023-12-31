const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { // Check if current item is not included in itemsToRemove
      newSource.push(source[i]); // Push items not removed into newSource array
  }
}
return newSource;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); //should pass 2,3 === 2,3
assertArraysEqual(without([1, 2, 3], [1, 2]), [2]); //should fail 3 !== 2
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); //should pass 1, 2, 3 === 1, 2, 3

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);




module.exports = without;