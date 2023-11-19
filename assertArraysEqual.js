const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: arr1.length !== arr2.length`);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
      return
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);