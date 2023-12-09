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




module.exports = middle;


