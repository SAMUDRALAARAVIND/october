// data types
// 1. should start with $, _, alphabets.
// 2. can contain $, _, alphbets and numbers.

/**
 * Data types
 * 1. number (1, 1.1 , -0.9, 10.2 ...)
 * 2. string ('a', "aravind", "jaswant" etc...)
 * 3. boolean (false , true)
 * 4. undefined (undefined)
 */
// let a;
// console.log(a); // undefined
// console.log(typeof a);

// truthy & falsy values

// if (false) {
// other than zero all other numerics will be treated as truthy value

// other than empty string every other string will be evaluated as a truthy value.

// undefined => falsy value

//   console.log("inside if");
// }

// console.log(2 ** 3); // 2^3
// console.log("2" === 2);
// //
// console.log("2" == 2);
// === is called strict comparision
// == will only compare the values and doesn't care about data types.

// "2" === 2 => false
// "2" == 2 => as values are equal true

// for, while, do while

// let sum = 0,
//   i = 2;
// sum = sum + i; // (sum = 0 + 2 => 2)
// i = i + 2; // ( i = 4)
// sum = sum + i; // ( 2 + 4 => 6)
// i = i + 2; // ( i = 4 + 2 => 6)
// sum = sum + i; // (sum = 6 + 6 => 12)
// console.log(sum);

// i = 6 = 3 * 2
// n => number of even natural numbers
// loop should end when i becomes 2*n

// i should be incremented by 2 units after every iteration.

/*
let i = 2,
  n = 1000,
  sum = 0;
// nth even number => 2*n => 2*3 => 6
// i = 2 => 4 => 6 => 8
// sum = 0 => 2 => 6 => 12
while (i <= 2 * n) {
  sum = sum + i; 
  i = i + 2; 
}
console.log(sum); // 12
*/

/*
let n = 200,
  sum = 0;
// n => number of even numbers.
for (let i = 2; i <= 2 * n; i = i + 2) {
  sum = sum + i;
}
console.log(sum); // 12
*/

/*
let n = 100,
  sum = 0,
  i = 2;

do {
  sum = sum + i;
  i = i + 2;
} while (i <= 2 * n);
console.log(sum);
*/

// let a = 20;
// console.log(a);

// Variables in js can be created by using 3 types of keywords
/**
 * i. let
 * ii. const
 * iii. var
 */

// let a = 20;
// const b = 10;
// b = 90;
// console.log(b);
// var c = 40;

// const => during declaration value has to be given

// const a = 10;
// var x = 20;
// x = 90;
// console.log(x);

// console.log(a, x); // 10, undefined

// console.log(a); // undefined
// const a = 20;

/**
 *
 * const => needs to be intialised during the declaration and can't be updated.
 *
 * let => intialisation is not mandaroty and can also be updated.
 *
 * var => intialisation is not mandaroty and can also be updated.
 *
 * let and const declared variables cannot be accessed before their declaration.
 *
 * var declared variables can be accessed before it's declaration.
 *
 *
 * because of hoisting.
 */
