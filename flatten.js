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



const array = [1, 2, [3, 4], 5, [6]];

const flatten = function(array) {
  let newArray = [];
  for (const num of array) {
    if (Array.isArray(num)) {
      for (const nestedNum of num) {
        newArray.push(nestedNum);
      }
    } else {
      newArray.push(num);
    }
  }
  return newArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 4, 3, 5, 6]);