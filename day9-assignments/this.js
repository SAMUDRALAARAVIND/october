// this keyword.
/**
 * Every instruction can be divided into two sections : 
 * 1. Global Line ( statement outside a function) 
 * 2. Local Line (something inside a function) 
 * 
 * 
 * this keyword in the global points to global object(window).
 */

// in browsers the global Object is window.
// console.log(window);

// window.prompt("Enter something")

// window.alert("Something")
// window.console.log("something")

// console.log(this); // window
// if(true) {
//     console.log(this); // this => window
// }

// window.prompt();
// this.prompt("Eneter");

// let aaa = 40;
// var aa = 20 ;
// function aaaa() { // named functions
//     console.log("object");
// }

// console.log(window);
// variables which are declared with var, function keywords in the global will be a part of the window object .

// aaaa();
// window.aaaa();
// this.aaaa(); 

// console.log(window === this); // #100 == #100

/**
 * 
 * DEFINITIONS:
 * 
 * when this keyword is used inside a function
 *  this keyword points the object who invoked that function.
 * 
 * this is not prefined value inside arrow function.
 */

/*
console.log(this); // window
function callme() {
    // this = window
    console.log(this);// window
}
callme(); // window.callme();
*/


/*
let user = { // #200
    name: "aravind",
    age: 22,
    print: function() {
        console.log(this); // this => user
    }
}
console.log(user);
user.print();
*/

// let user = {
//     name: "aravind",
//     address: {
//         city: "Warangal",
//         print: function() {
//             this.city = "Something else";
//             // #500.city = 
//         }
//     }
// }

/**
 * user = #200 => { name: "aravind", address: #500}
 */

// user.address.print();
// console.log(user);

// let user = {
//     firstName: "aravind",
//     lastName: "samudrala",
//     getFullName: function() {
//         return this.firstName+ " "+this.lastName ;
//     }
// }

// console.log(user.getFullName());
// this is not prefined value inside arrow function.

// let func = () => {
//     // this => treated as a variable.
//     console.log(this); // local line 
// }
// func(); // no one invoking in front of it.

// this => window.
let user = {
    firstName: "aravind",
    lastName: "samudrala",
    print1: function() {
        // this => user
        console.log(this);
    },
    print2: () => {
        // this is not defined.
        // lexical parent of print2 => global
        // console.log(this.firstName); 
        // window.firstName => undefined
    }
}

user.print1() ; 
user.print2(); 

// var x = () => {
//     // this => 
//     console.log(this); // 
// }
// window.x();