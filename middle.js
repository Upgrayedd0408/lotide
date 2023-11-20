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

const middle = function(array) {
  let midValue = [];
  if (array.length <= 2) {
    return midValue;
  } else if (array.length % 2 === 0) {
    midValue.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else if (array.length % 2 !== 0) {
    midValue.push(array[Math.floor(array.length / 2)]);
  }
  return midValue;
};

console.log(middle([1, 2, 3]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);


