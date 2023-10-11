/**
    Primitive and Non primitive data types
    1. Primitive data types (Stack)
        Number
        String
        boolean 
        undefined
    2. Non Primitive data types ( Heap )
        function
        objects
 */

// let a = 20,
//   b = 20;
// console.log(a === b);

// let a = [1, 2],
//   b = [1, 2];
// console.log(a == b);

// let a = { name: "aravind" },
//   b = { name: "aravind" };
// console.log(a === b);

// let a = 20;
// // 100 line
// console.log(a);
// 6Bytes

/**
 * Non primitive data types are growable in size so they are stored in the HEAP memory.
 *
 * Primtive data types will have a fixed amount of size and are not growable.
 */

// let a = 0; // primtiive => Stack Memory
// let b = { name: "aravind" }; // non primitive => Heap
// // variable a = 0, b = #220
// let c = { name: "aravind" }; // non primitive => Heap
// // variable c = #430
// console.log(c === b); // #8293829 === #430 => false

// console.log(c.name == b.name); // "aravind"  == "aravind"

// == => compares the value
// === => compares the value as well as data types
// console.log("10" == 10) ; // true
// console.log("10" === 10) ; // false

/*
let a = [10, 20, 30]; // a = #2890
let b = a; // b = #2890
console.log(a == b, a === b); // true, true
*/

// #300= [6, 3, 200]

/*
let a = [6, 3, 8]; // a = #300
let b = a; // b = #300
a[2] = 200; //
console.log(a, b);
// #300 => [6, 3, 200]
*/

// let a = [3, 4, 5]; // a = #420
// // let b = a; // b = #420
// // let temp = a; // temp = #420
// a = 300; // a = 300
// b = 400; // b = 400

// console.log(a, b);

// let a = [4, 5, 6]; // a = #320
// console.log(a.length); // 3
// a = 56; // a = 56
// console.log(a.length); // number

// let arr = [4, 5, 6]; // #200
// let b = arr.slice(); //b = #400 = [4, 5, 6]
// arr[0] = 900;
// console.log(arr, b);

// let a = [4, 5, 2, 3, 1]; // #400
// // ...[4, 5, 2, 3, 1] => 4, 5, 2, 3, 1

// // ...[3, 4] => 3, 4
// let b = [...a]; // [4, 5, 2, 3, 1] => #300
// console.log(b, a);

// function callme(a, b, c) {
//   // a = [3, 4, 9], b = undefined, c = undefined
//   console.log(a, b, c);
// }
// let x = [3, 4, 9];
// // ...[3, 4, 9] => 3, 4, 9
// callme(...x); // callme(3, 4, 9)

// let user = { a: 1, b: 2, c: 3 }; // #400
// let user1 = { ...user }; // #300

// console.log(user, user1);
// console.log(user === user1);

// let func = function(a, b){
//     console.log(a + b)
// }

// func(10, 20);

// let func = (a, b) => {
//     console.log(a + b)
// }

// func(10, 20); //

// let func = function () {
//   return 10;
// };
// let func1 = () => 10;
// console.log(func1(), func());

// let func = function (a) {
//   return a + 20;
// };
// // console.log(func(10));

// let func1 = (a) => a + 20;
// console.log(func1(10));
