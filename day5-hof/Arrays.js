/**
 * Callbacks and Higher order functions
 * Arrays Higher order functions.
 * Strings
 */

/**
 * whenever a functions is passed as an argument to another function then that argument we call as callback function.
 *
 * If a function takes / returns another function then that function we call as Higher Order function.
 */

/*
function callme(a) {
  // a = f
  console.log(typeof a); // function
  a(); // f();
}

// callme("aravind"); // "aravind" => argument

// callme(true); // true => argument

// callme(23); // 23 => argument

let f = function () {
  console.log("inside callback function");
};

callme(f); // function () {} => argument
*/

/*
function callme(a, b, c) { // callme is a HOF
  // a = true, b = 19, c = function(){}
  console.log(typeof a, typeof b, typeof c);
  // boolean, number, function
  c();
}

callme(true, 19, function () {
  console.log("inside callback");
});
*/

/*
function callme() { // callme is HOF.
  let f = function () {
    // f = #300
    console.log("first");
  };
  console.log(f);

  return f; // #300
}

let result = callme(); // result = #300
console.log(result); //
result();
*/

// Arrays Higher Order Functions.

/**
 * push, pop, shift, unshift, splice, slice, join
 *
 * forEach, map, filter, reduce, sort
 *
 * forEach =>
 *  is used to just iterate on the entire array and it returns nothing.
 *
 * map =>
 *  is used to iterate on the entire array and it returns another array of same length with the values as the returned values by the callback eachtime.
 *
 * filter =>
 *  is used to filter out data from the given list.
 * ex: filtering out even number, filtering out odd numbers.
 */

/*

let arr = [4, 3, 5, 6];
// forEach is a HOF
let sum = 0;
let f = function (element) {
  sum += element;
};

arr.forEach(f);
console.log(sum);

*/

/*

let arr = [3, 4, 1];
function forEach(callback) {
  // callback =>  f => #200
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
    // f(arr[i], i, arr);
  }
}
let f = function (a, b, c) { // #200
    console.log(a, b, c)
  console.log("hello");
};

forEach(f); // forEach(#200)
*/

/**
 * Given an array use the built in forEach method and compute the sum of all even numbers in that array.
 */

/*

let arr = [9, 7, 6, 4, 3, 1, 2];
let sum = 0;
arr.forEach(function (element) {
  if (element % 2 === 0) {
    sum += element;
  }
});

console.log(sum);

*/

// let arr = [3, 2, 4, 10];

// let f = function (e, i, list) {
//   return e * i;
// };
// // [3 * 0,2*1, 4*2, 10*3 ]

// let x = arr.map(f);

// console.log(x);

/*
let arr = ["3", "12", "45", "23"];
//  * Generate  another array from above which will be the numeric representation of it.
// [Number("3"), Number("12"), Number("45"), Number("23")]

let result = arr.map(function (element, i) {
  return element + i;
});
// ["30","121", "452", "233" ]
console.log(result);
*/

/*
// filter method.
let arr = [3, 4, 2, 6, 9];
// [4, 2, 6]

let result = arr.filter((element, index, list) => {
  return element % 2 != 0;
});

// []

console.log(result);
*/

/*
let arr = [4, 5, 3];

let f = (prev, element, index) => {
  console.log(prev, element, index);
  return prev + element + index;
};

let result = arr.reduce(f, 11);
console.log(result);
*/

/*
// when the intial value is not passed to reduce method.
let arr = [4, 5, 3];

let f = (prev, element, index) => {
  console.log(prev, element, index);
  return prev + element + index;
};

let result = arr.reduce(f);
console.log(result);
*/
/*
let arr = [5, 1, 3, 2, 10]; // 21

let f = (prev, element) => {
  return prev + element;
};

const sum = arr.reduce(f);

console.log(sum);
*/

/**
 * (a, b) => result
 * result -ve => a will be before b in the final result
 * result +ve => b will be before a in the final result
 *
 *
 * Increasing Order:
 * a > b (possibility 1): ( 10 > 3)
 *  (10, 3) => 10 - 3 ( a - b )
 * a < b ( possibility 2):
 *  (2, 19) => 2 - 19 ( a - b )
 *
 * Decreasing Order:
 *  a > b ( possibility 1):
 *   (19, 5) => 5 - 19 ( b - a )
 *  a < b (possibility 2):
 *   (11 , 31) => 31 - 11 (b - a)
 *
 */
let arr = [4, 2, 6, 10];
arr.sort((a, b) => {
  return b - a;
});

console.log(arr);
