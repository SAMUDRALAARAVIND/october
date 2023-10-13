/**
 * Execution flow of a javascript code.
 * 
 * Global line 
 *   
 * Local Line 
 *   if a line of code is present inside the function then that's called 
as local statement.
    

if a variable is declared as a global line then that's called as global variable.
if a variable is declared as a local line then that's called as local variable.

*/
// let a = 20 ; 

// function callme(x, y) { 
//     // let a = 10 ;
//     console.log(x + y + a); 
// }

// callme(a, 2*a);


/*
let a = 20 ;
function callme(){ 
    let a = 30 ;
    let f = function(){ // #300
        console.log(a * 2);
    }
    return f ; // #300
}
let result = callme() // #300
result(); // #300 => f() => #300()
*/

// let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// let withoutArticles = [ "Virupaksha Temple","Victoria Memorial", "Tajmahal"]
// let sortedWithoutArticles = ["Tajmahal", "Victoria Memorial", "Virupaksha Temple"]

// let finalAns = ["Tajmahal","Victoria Memorial", "The Virupaksha Temple" ]

// let str = "The jeba an rohan";
// str = str.replace(/\ban\b|\bthe\b|\ba\b/gi, "")
// str = str.replace(/ +/gi, " ");
// str = str.trim();
// "jeba rohan"

// p1: in the start  () => "The jeba an rohan" => "jeba an rohan"
// p2: in the middle _the_ | _an_ | _a_
// p3: in the end

// str.replace(/the|an|a/gi, '') ; 


// articles may be there at the beginning only.

// let arr = ['The Virupaksha Temple', 'A Victoria Memorial', 'An Tajmahal'];
// let withoutArticles =  [] ;
// let map = {} ;
// for(let i = 0 ; i < arr.length; i++) {
//     let str = arr[i];
//     str = str.replace(/\ban\b|\bthe\b|\ba\b/gi, "")
//     str = str.replace(/ +/gi, " ");
//     str = str.trim();
//     map[str] = arr[i];
//     withoutArticles.push(str);
// }
// withoutArticles.sort();
// for(let i = 0; i < withoutArticles.length; i++) {
//     console.log(map[ withoutArticles[i] ]);
// }