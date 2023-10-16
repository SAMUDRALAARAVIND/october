/**
 * Block Scope 
 * closures 
 * Objects (references)
 */

/*
let a  = 20 ;
let b = 100;

let f = function(a,b) {
    // a = 22, b = 24
    console.log(a + b);
    let f1 = () => { //f1 = #300
        let b = 30 ;
        console.log(a + b); //  22 + 30 = 52
    }
    return [a-b, f1];
}

let result = f(a+2, a+4); // result = [-2, #300]
// console.log(typeof result[1]);// function
console.log(result); // [-2, #300]
result[1](); // #300()
*/

/**
 * 
 * Scope of a variable means the region where that variable can be accessed .
 * 
 * Every variable in js can be accessed with in it's own context or in it's chidren context .
 */

// let a = 20;
// let f = () => {
//     let a = 23;
//     let f1 = () => {
//         console.log(a);
//     }
//     return f1 ;
// }

// let result = f()
// result();




/**
 * Block ? { } excluding functions.
 */

/**
 * let, const declared variables are block scoped.
 * 
 * if a variable is declared inside a block with let/const keywords then that variable can be accessed 
 * within that block only.
 * 
 * 
 * var and function declarations are not block scoped but they are context scoped.
 */

// if(true) {
//     const a = 200; 
//     console.log(a);
// }
// console.log(a);


// console.log(a); // undefined
// if(true) {
//     var a = 200; 
//     let b = 100 ;
//     console.log(a + b); // 300
// } 
// console.log(a); // 200 
// console.log(b); // not defined


// console.log(a) ;
// if(false){
//     var a = 200 ;
// }
// console.log(a);

// function callme() {
//     // variable a gets hoisted in the context level a = undefined .
//     console.log(a); // undefined
//     if(true){
//         var a = 200 ;
//         let b  =100 ; 
//         console.log(a + b) ; // 200 + 100 = 300 
//     }
//     a++; // a = 201
// }
// let a = 30 ;
// callme();
// console.log(a); // 30

// Destructuring

// let obj = {
//     name: "aravind", 
//     age: 22, 
//     email: "aravind@gmail.com"
// } // obj = #200 
// // let copiedObj = {...obj}
// // console.log(obj, copiedObj, obj === copiedObj);
// // console.log(obj.newProperty);


// let copiedObj = {} ; // #500
// Object.assign(copiedObj, obj)
// console.log(obj, copiedObj, obj === copiedObj);
// Object.assign(copiedObj, {abc: "XYZ"})
// console.log(copiedObj);


// Destructuring.

// let arr = [4, 5, 2, 10]; 

// let x  = arr[2], y = arr[3], z = arr[1] ;

// let [z, x, y] = arr ;
// console.log( x, y , z); // 5, 2, 4


// let arr = [23, "aravind"] ;  // 0 => age, 1 => name
// // let age = arr[0], name = arr[1] ;
// // console.log(age, name);

// let [age, name] = arr ; // age = 23, name = "aravind"

// let user = {
//     name: "aravind",
//     age: 22,
// }

// let name = user.name , age = user.age ;
// console.log(name , age);

// let name = user.name ;
// let {name} = user ;
// console.log(name);

// let arr = [3, [4, 5, 6], 8]

// let [ x , [, y] ] = arr ;
// console.log(y) ; // [4, 5, 6]

let user = {
    name: "aravind",
    address: {
        city: "Warangal",
        pincode: 39393003
    }
}
// let {name: username} = user ;
// console.log(username);

// // let pincode = user.address.pincode ;
// let {address: {pincode} } = user ;
// console.log(pincode);

// function parent(x) {
//     /**
//      *  x = () => {
//                 console.log("callback function");
//             }
//      */

//     // here x is a callback function
//     console.log(typeof x ); // function
// }

// parent(() => {
//     console.log("callback function");
// })