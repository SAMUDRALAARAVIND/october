// let student = {
//     name: "aravind",
//     rollNumber: 184253,
//     email: "aravind@gmail.com"
// }

// let htmlElement = {
//     tagName: "",
//     className: "abc xyz",
//     id: "" | "some-id",
//     style: { 
//         color: "black",
//         backgroundColor: 'red',
//         fontSize: "12px",
//         display: "flex",
//     }
// } ;

/**
 * HTML + CSS => Browser => JavaScript Objects
 * 
 * DOM => Document Object Model
 * Document => HTML document.
 * Object => JavaScript Object
 * 
 * The way browser reprsents the HTML document in the form of javascript objects is called as DOM.
 */


// function callme() {
//     console.log("click");
// }

// function dblclick(){
//     console.log("dblclick");
// }

/**
 * We can query the DOM (document) for any element in 4 ways
 * 
 * 1. extract element by it's id. => return null | one element.
 * 2. extract elements by it's className 
 *    returns an array like datastructure. []
 *  
 * 3. extract elements by it's tagName.
 *    returns an array like datastructure. []
 * 
 * 
 * 4. extract elements by CSS Selector.
 */

function method1() {
    // print all the properties of input element
    // console.log(document);
    /*
        since document knows everything about the html 
        to get info of an element we need to ask document object.
    */

    const inputElement = document.getElementById("test");
    console.log(typeof inputElement);
    console.log(inputElement);
    console.log(inputElement.tagName);
    console.log(inputElement.type);
    console.log(inputElement.placeholder);
    inputElement.value = "Aravind Samudrala"

    let element = document.getElementById("abc");
    console.log(element);
}

function method2() {
    const elements = document.getElementsByClassName("mnopqrst");
    console.log(elements);
    // console.log(elements.length);
    // console.log(elements[0]);
    // console.log(typeof elements);
    // console.log(elements[0].placeholder);
    // elements[0].placeholder = "Namaste" ;
    // console.log(elements[2].tagName); // xyz
}

function method3() {
    const elements = document.getElementsByTagName("input");
    console.log(elements);
}

function method4() {
    const elements = document.querySelectorAll(".xyz");
    console.log(elements);
}

function method5(){
    const element = document.querySelector(".xyz")
    // returns 0 | 1 element.
    element.required = false ;
    console.log(element);
}


/*
Closures:

// let x = {} // 100
// let y = {} // 200
function makeCounter(){
    let count = 0 ; 
    return function(){ 
        return count ++; 
    }
}

let counter1 = makeCounter();  // #200 => count = 0 => 1 => 2

let counter2 = makeCounter(); // #300 => 0

console.log(counter1()); // #200() => 0
console.log(counter1()); // #200() => 1
console.log(counter2()); // 0

*/

/*

function cart(){
    let items = 0; 
    return { // #300
            addItem: function(){
                items++
            },
            getItems: function(){ 
                return items;
            }
    };
}

let obj = cart(); // obj = #300 => items = 0 => 1 => 2 => 3

obj.addItem() // #300.addItem()
obj.addItem() // #300.addItem()
obj.addItem() // #300.addItem();
console.log(obj.getItems()); // 3

*/