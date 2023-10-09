/**
 * 1. Arrays
 * 2. Object literals
 * 3. Primitive and Non Primitive data types.
 */
// let a = 20, b = 22, c = false;

// arrays in js are non homogenious.
//         0,  1,   2 ,     3
// var arr = [20, 22, true, "aravind"];
// 22 + true => 22 + Number(true) => 22 + 1 = 23
// console.log(arr[1] + arr[2]);
// [0, 3]
// console.log(arr[10]); // undefined

// console.log(arr);
// console.log(arr); // [20, 22, true, "aravind"]
// arr[2] = false;
// console.log(arr); // [20, 22, false, "aravind"]

let nums = [8, 2, 3, 8];

// console.log(arr[0] + arr[1] + arr[2] + arr[3])

/*
let index = 0,
  sum = 0; // index = 0 => 1
while (index <= 3) {
  sum += nums[index]; // 8, 2 , 3, 8
  index++;
}
console.log(sum);
*/

// Arrays in js are dynamic in nature by default.
// let arr = [1, 4, 5];
// [1, 4, 5].push(10) => [1, 4, 5, 10]
// console.log(arr.length);
// adding an element into the array.
// let result = arr.push(10); // result = 4
// let result1 = arr.push(11);
// console.log(arr); // [1, 4, 5, 10, 11]
// console.log(result); // 4

// console.log(arr);
// [1, 4, 5, 14, 23, -89]
// let result = arr.push(14, true, -89);
// console.log(arr);
// console.log(result, arr.length);

// let str = ""; // "" => "1 " =>  "1 4 "
// let i = 0;
// while (i < arr.length) {
//   str += arr[i]; // "1 4 " + 5=> "1 4 5"
//   if (i < arr.length - 1) {
//     str += " ";
//   }
//   i++;
// }
// console.log(str); //  "1 4 5"

// let arr = [3, 4, 10, 20, 30, 2];

// let removedElement = arr.pop();
// console.log(removedElement); // 2
// console.log(arr) //[3, 4, 10, 20, 30]

// let arr = [4, 3, true, "abc"];

// console.log(arr.length); // 4
// let arr = [4, 3, 5];
// let x = arr.unshift(19, 17, 13); // [19, 17, 13,4, 3, 5]
// console.log(x);
// // [19, 17, 13, 4, 3, true, "abc"]
// console.log(arr); // [19, 4, 3, true, "abc"]

// let removedElement = arr.shift();
// console.log(arr, removedElement); // [3, true, "abc"]

// let arr = [4, 3, 5];
// maxIndex = 2
// [4, 3, 5, undefined, undefined ,99]
// arr[5] = 99;
// console.log(arr);

// let arr = [4, 1, 88, 3, 5, 7];
//                2

// let removedElements = arr.splice(2, 2);
// // removedElements = [3, 5]
// // arr = [4, 1, 7]
// console.log(removedElements);
// console.log(arr);
// let elements = arr.splice(1, 3);
// console.log(elements); // [1, 88, 3]
// console.log(arr); // [4, 5, 7]

// arr.splice(2, 3, 10, 12, 13, 14); // [4, 1, 7]
// [4, 1, 10, 12, 7]
// console.log(arr);

// let x = prompt("enter something");
// console.log(x);

/*
let arr = [
  10, // undefined
  "aravind", // 7
  [3, 4], // 2
  [393, 39030], // 2
  true, // undefined
  false, // undefined
  [3, 39, 20], // 3
];

// if length prop of an element is not undefined. and not a string

let totalArrays = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length != undefined && typeof arr[i] != "string") {
    totalArrays++;
  }
}
console.log(totalArrays);
*/
// "10 20 30 12 13"
// let inputStream = prompt();
// console.log(inputStream);

// let arr = [3, 4, 5, 6];
// let segment = arr.slice();
// console.log(segment);

// // "3$4$5$6"
// let joinedStr = arr.join(" ");
// console.log(joinedStr, typeof joinedStr);

// Objects (key-value pair structure)

// let arr = [4, 5, 3]
//            0  1  2

// user => name, rollNumber
// let user = ["aravind", 184253] ;

// let user = {
//   name: "aravind",
//   rollNumber: 184253,
// };

// user["key"] => gives the value of `key`
// user.key => gives the value of `key`
// console.log(user["rollNumber"], user.name);

// arr[0]= "Aravind";
// user["name"] = "efefenfejn";
// user.name = "Aravind";
// console.log(user);

// let user = {
//     name: "shivani",
//     age: "shivani"
// };
// // console.log(user["age"], user.age);
// user["age"] = 23;
// user.email = "aravind@email.com";
// console.log(user);
// delete user["name"]; // delete user.name;
// console.log(user);
// delete user.age
// user.name = undefined;
// console.log(user);
// user.name = "abhi";
// console.log(user);
// let user = {
//   name: "shivani",
//   age: 30,
//   address: {
//     city: "Mumbai",
//   },
// };

// console.log(user.address["city"]);
// [["name", "shivani"] , ["age", 30]]
// let entries = Object.entries(user);
// console.log(entries);
// for (let i = 0; i < entries.length; i++) {
//   console.log(entries[i][1]);
// }

/*
let arr = [4, 1, 10, 12];
//         0  1   2   3
for (let i in arr) {
  console.log(i, typeof i);
}

for (let i of arr) {
  console.log(i);
}
*/

let question = {
  description: "What is object ?",
  correctAnswer: "C",
  option1: "A",
  option2: "B",
  option3: "C",
  "a-b": "sksk",
};
console.log(question.description);
console.log(question["description"]);
// console.log(question.a - b);
for (let i in question) {
  // i = "description"
  // question[i] => question["description"]
  console.log(i, question[i]);
}

/**
 * Adding new elements
 * Updation of existing elements.
 * deletion of an element
 * iterating on the data structure.
 */

console.log(typeof [1, 2, 4], typeof {});
