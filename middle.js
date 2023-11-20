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

const findMiddle = function(array) {
  let midValue = [];
  if (array.length <= 2) {
    return midValue;
  } else if (array.length % 2 === 0) {
    midValue.push(array.length / 2, array.length / 2 + 1);
  } else if (array.length % 2 !== 0) {
    midValue.push(Math.ceil(array.length / 2))
  }
  return midValue;
};

console.log(findMiddle([1, 2, 3]));

assertArraysEqual(findMiddle([1, 2, 3]), [2]);
assertArraysEqual(findMiddle([1, 2]), []);
assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]);


