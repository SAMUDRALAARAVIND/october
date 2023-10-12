// let arr = [ 6, 12, 112 ]; 
/**
 * Increasing order : 1, 2, 3, 4, 6, 9
 * Decreasing order  : 9, 6, 4, 3, 2, 1 
 * 
 * If the elements are strings 
 *  [ "6", "12", "112" ] => ["112", "12", "6"]
 */

/**
 * (a, b) => +ve | -ve | 0
 * return -ve value if we need `a` to be before `b` in the final output
 * return +ve value if we need `b` to be before `a` in the final result .
 * 
 * Increasing order: 
 * a > b 
 *    (19, 3) => +ve (19 - 3) (a - b)
 * a < b
 *    (12, 31) => -ve (12 - 31) (a - b)
 * 
 * Decreasing Order: 
 *  a > b :
 *    (19, 3) => -ve ( 3 - 19) ( b - a )
 *  a < b :
 *    (12, 31) => +ve ( 31 - 12) (b - a)
 */
// arr.sort((a, b) => b-a);
// console.log(arr);

/**
 * 
 * user = { name: "", age: ""}
 */


// let users = [
//     {
//         name: "Aravind",
//         age: 23, 
//     },
//     {
//         name: "manish",
//         age: 19,
//     },
//     {
//         name: "Rajesh",
//         age: 31
//     },
//     {
//         name: "Madhu",
//         age: 10
//     }
// ];

// sort the list of users above in decreasing order of their age.

// users.sort((a, b) =>  b["age"] - a["age"])

// users is sorted users objects 

/**
 * [
    {
        "name": "Rajesh",
        "age": 31
    },
    {
        "name": "Aravind",
        "age": 23
    },
    {
        "name": "manish",
        "age": 19
    },
    {
        "name": "Madhu",
        "age": 10
    }
]

  finalArray = [ "Rajesh","Aravind","manish", "Madhu"  ]
 */
// let names = users.map(user => user.name)
/**
 * 
 * [
 *   ["rajesh", 31],
 *   ["aravind", 42],
 *   ["vamshi", 22],
 *   ["abhilash", 19]
 * ] => increasing order 
 * 
 * [
 *  ["abhilash", 19],
  *  ["vamshi", 22],
  * ["rajesh", 31],
  * ["aravind", 42]
 * ]
 * 
 */

/*
let users = [
    ["rajesh", 31],
    ["aravind", 42],
    ["vamshi", 22],
    ["abhilash", 19]
] ;

users.sort((a, b) => {
    // a = ["name", age], b = ["name", age]
    return a[1] - b[1]
})

console.log(users);
*/


let names = [ "abhilash", "aravind","soni", "rajesh", "hemanth" ]
// increasing order => ["abhilash",  "aravind", "hemanth" , "rajesh", "soni"]
// Decreasing order => [ "soni" , "rajesh", "hemanth", "aravind", "abhilash" ]

/*
Increasing order:
names.sort((a, b) => {
    // a = string , b = string
    // a > b : "mn" > "aa" => `b` before `a`
    // a < b : "ab" < "ac" => `a` before `b`
    // a == b : "aa" == "aa" => 0
    if(a > b ) { return 1 }
    if(a < b) { return -1 }
    return 0;
})
*/

/*
 Decreasing order 
names.sort((a, b) => {
    // a > b : "ab" > "aa" => `a` before `b`
    // a < b : "ba" < "bc"  => `b` before `a`
    if(a > b) return -1; 
    if(a < b) return 1 ;
    return 0;
})
console.log(names);
*/

