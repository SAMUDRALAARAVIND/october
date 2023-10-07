/**
 * Today's agenda:
 *
 * Hoisting
 * simple functioon
 * Arrays
 * Objects
 */

// let x = 20;

// if (x) {
//   x++;
// } else {
//   x--;
// }

// condition ? op2 : op3

// x ? x++ : x--;
// console.log(x);

// Hoisting

// console.log(a); // undefined
// var a = 20;
// console.log(a + 10); // 20 + 10=> 30
// let b = 30;
// console.log(a + b); // 20 + 30 => 50

/**
 *
 * Whenever we run a piece of js code it goes through two phases.
 *
 * 1. Creation Phase
 *    => all the code will be scanned by the js engine.
 *    => it figures out the variables and these variables will be intialised with some data.
 *     => the process of allocation of data to the variables after scanning is called as
 * hoisting.
 *   => variables which are declared with let, var, const will be intialised with `undefined`.
 *   => variables which are declared with `function` keyword will be intialised with it's actual value ( full hoisting ).
 *   => Variables which are declared with let and const will be kept inside Temporal Dead Zone(TDZ);
 *
 * 2. Execution Phase
 *   => the program gets executed line by line.
 *
 */

/**
 
console.log(a); // undefined
console.log(b); // Error: b is not defined.
var a = 20;

 */

/*
let b = 100;
console.log(a + b); // undefined + 100 => NaN
var a = 200;
const c = 20;
console.log(c + a + b); // 20 + 200 + 100 => 320
*/

/**
 *
 * operand1 + operand2
 *
 * if atleast one operand is a string then `+` will act like concatenation operator.
 *
 * Remaining all the scenarios it will act like an arithmatic operator.
 */

// true + 10 ; // addition
// Number(true) + 10 => 1 + 10 => 11
// console.log("" + 20 + true); //

// '' + 20  => '' + String(20) => '' + '20' => '20'

// ('' + 20) + true  => '20' + true

// '20' + true => "20" + String(true)
// "20" + "true" => "20true"

// true + true ; // Number(true) + Number(true) = 2

// 3 + (+"4") => Number("4") => 4

// 3 + 4 => 7

// 5 + "+6" => String(5) + "+6"
// "5" + "+6" => "5+6"

// +"5" => Number("5") => 5
// "5"

// let $ = 20;
// console.log($);

// undefined + 100 => Number(undefined) + 100 =>
// NaN + 100 => NaN

// NaN + "200" => String(NaN) + "200"
// "NaN" + "200" => "NaN200"

// BASICS OF FUNCTIONS

/*
    A function is a piece of code that can re used whenever we want.
*/

/**
 *
 * Find the sum of all the arithmatic operations of a given two numbers.
 *
 * 6 , 3 => 6+3 ,6*3 ,6-3,6/3
 *       => 9, 18, 3, 2 => 32
 */

// let a = 6,
//   b = 3;
// console.log(a + b + a * b + (a - b) + a / b);

// let c = 9,
//   d = 10;
// console.log(c + d + c * d + (c - d) + c / d);

/*
function abc(a, b) {
  // a, b are variables only => parameters
  // a = 10, b = 20

  return a + b + a * b + (a - b) + a / b;
}

let result = abc(10, 20);
console.log(result);
// 10 , 20 are arguments.
// invoking function or calling the function.

*/

/*
function add(a, b) {
  // a = 1, b = "aravind"
  console.log(a, b);
  //   return a + b; // 1aravind
}

let r = add(1, "aravind");
console.log(r); // undefined
*/

/**
 * Functions in javascript are variables only their naming convention should follow the variable naming convention.
 */

// named functions / regular functions.
// function callme() {
//   return true;
// }

// let a = 20;
// console.log(typeof a); // number
// console.log(typeof callme); // function]

// const a = 2920023989;

// let num = 1000;
// let callme = function (x, y) {
//   // x = 10, y = 20 ;
//   return x * y; // 10 * 20 = 200
// };
// // invoking,

// let r = callme(10, 20);

// let one = function () {}; // one
// console.log(one);

// console.log(two);
// function two() {
//   let x = 200,
//     y = 300;
//   console.log(x + y);
// }

// console.log(a);
// var a = 20;

// function a() {}
// console.log(a);

// let a = function () {};
// a();

// let x = prompt(); // int x = sc.nextInt();
// console.log(x);

function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); //1 + 2 + 3 = 6
add(1, 2); // 1 + 2 + undefined = NaN
