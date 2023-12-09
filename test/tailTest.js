const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("Should show that the tail function does not affect the original fam array length", () => {
    let fam = ["Buddy", "Maverick", "Myles"];
    tail(fam);
    assert.strictEqual(fam.length, 3);
  });

  it("Should take off the first value in the array", () => {
    let words = tail(["Buddy", "Maverick", "Myles"]);
    assert.deepEqual(words[0], "Maverick");
    assert.deepEqual(words[1], "Myles");
  });

  it("Should return an empty array when array only has 1 element", () => {
    let test3 = tail([1]);
    assert.deepEqual(test3.length, 0);
  });

  it("Should return an empty array if there is nothing passed in", () => {
    let test4 = tail([]);
    assert.deepEqual(test4.length, 0);
  });

});

