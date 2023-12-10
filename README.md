# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Upgrayedd0408/lotide`

**Require it:**

`const _ = require('@Upgrayedd0408/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: This function takes in two arrays, compares them and outputs a Pass or Fail test result

* `assertEqual(...)`: This function takes in two primitive values, compares them and outputs a Pass or Fail test result

* `assertObjectsEqual(...)`: This function takes in two Objects, compares them and outputs a Pass or Fail test result

* `eqArrays(...)`: This function takes in two arrays, compares them and returns a true or false value.

* `eqObjects(...)`: This function takes in two objects, compares them and returns a true or false value.

* `countLetters(...)`: This function takes in a string and counts how many times each letter appears and stores it in an object.

* `countOnly(...)`: This function takes in a string and a true or false value. True means to count the value and false means to skip it. It stores the result in an object as key value pairs.

* `findKey(...)`: This function takes in an object and a callback function. The callback function compares the keys value with the value expected and returns the first key that matches.

* `findKeyByValue(...)`: This function takes in an object and a value. If the value provided matches a value in the object, it returns the key of that value.

* `flatten(...)`: This function takes in an array, checks to see if there are nested arrays inside and pushes the individual values to a new array.

* `head(...)`: This function takes in an array and returns the first value of the array.

* `letterPositions(...)`: This function takes in a string and returns an object that shows the index(s) of each letter in the string.

* `middle(...)`: This function takes in an array and returns the middle value or values if the array length is even.

* `tail(...)`: This function takes in an array removes the first value and returns the remainder of the array.

* `takeUntil(...)`: This function takes in an array and a callback. It pushes the arrays values to a new array until the results of the callback return true.

* `without(...)`: This function takes in two arrays. It removes the values that are put through in the itemsToRemove argument from the source argument.