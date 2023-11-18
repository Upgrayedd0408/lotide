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

let fam = ["Buddy", "Maverick", "Myles"];
tail(fam);
assertEqual(fam.length, 3);

let words = tail(["Buddy", "Maverick", "Myles"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Maverick");
assertEqual(words[1], "Myles");

let test3 = tail([1]);
console.log(test3);

let test4 = tail([]);
console.log(test4);
