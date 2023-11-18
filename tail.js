const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

//testing to see if tail function doesn't modify original variable
let fam = ["Buddy", "Maverick", "Myles"];
tail(fam);
assertEqual(fam.length, 3);

//testing to see if tail function works correctly.
let words = tail(["Buddy", "Maverick", "Myles"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Maverick");
assertEqual(words[1], "Myles");

//Testing arrays with only 1 element
let test3 = tail([1]);
console.log(test3);
assertEqual(test3.length, 0);

//Testing empty arrays
let test4 = tail([]);
console.log(test4);
assertEqual(test4.length, 0);
