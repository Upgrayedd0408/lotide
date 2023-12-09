const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("Should return the middle value in an odd array length",() => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it("Should return an empty array when there is only 2 values in the array", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("Should return 2 values when there is an even array length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
})

