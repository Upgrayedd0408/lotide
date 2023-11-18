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

const words = tail(["Buddy", "Maverick", "Myles"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Maverick");
assertEqual(words[1], "Myles");

