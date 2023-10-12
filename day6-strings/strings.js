// let username = 'manish' ;
// // `str` => is called as template string.
// let wave = `hi, ${username}` ;
// console.log(wave);

/*
let arr = [4, 2, 1, 2] ;  // sequence of elements

let str = "aravind" ;

console.log(arr.length, str.length);
console.log(arr[2] , str[3]);
console.log(arr[5], str[10]);

arr[2] = 99; 
str[3] = 'X' ; // Strings in js are immutable .
console.log(arr, str);

let segment = arr.slice(1, 3);
let segment1 = str.slice(2, 5);

console.log(segment, segment1 );

// in the case of arrays splice manipulates the array.
// do you think splice method exists on string ? no
*/

/*
let str = "aravind" ;
function abc(start, end) {
    // start = 2 , end = 5
    let output = '' ; // '' => 'a' => 'av' => 'avi'
    for(let i = start; i < end; i++){
        // i = 4
        output = output + str[i]; 
    }
    return output; // 'avi'
}
console.log(abc(2, 5));
*/

// console.log(str[10]); // undefined
// console.log(str[0] + str[3] + str[10]); // 'a' + 'v' + undefined => avundefined
// console.log(str.charAt(3) , str.charAt(10));
// console.log(str.charAt(0) + str.charAt(3) + str.charAt(10)); 
// 'a' + 'v' + '' => 'av'


// let str = "  ab    c   "; 

// let trimmedString = str.trim();  // "ab   c"
// console.log({x: trimmedString});
// console.log({ y: str} );


// let str = "3,4,5,6" ; // [3, 4, 5, 6]
// let fragments = str.split(",")
// let nums = fragments.map((a) => Number(a))
// console.log(nums);

// let nums = str.split(",").map(a => Number(a));
//         nums = ["3","4", "5", "6"].map((a) => Number(a)) ;// [3, 4 ,5, 6]
// console.log(nums);

// let str = "a$bAc3" ;
// 'A' => 3 is the index of 'A' 
// 'a' => 0
// '$' => 1

// console.log(str.charCodeAt(4));


// 113 
// let x = String.fromCharCode(48);
// console.log(x);


// let str = "Hello world! yellow" ; // replace `llo` with `ll`
// "Hell world!"
// console.log(str, str);
// let newString = str.replace('llo', 'll');
// console.log(newString, str); // "Hell world!", "Hello world!"
// console.log(str[3].toUpperCase()); // 'l' => 'L'


/**
 * Regular expressions 
 */

// let str = "Hello world! yeLLow" ;  // "llo", "LLo"
// console.log(str.indexOf("llo")); // 2
// let regexp = /LLo/ig; // regular expression
// console.log(str.match(regexp));
// /llo/gi => case insensitive pattern
// /llo/g => case sensitive pattern
// let finalStr = str.replace(regexp, 'X');
// console.log(finalStr);


// Special Character 
/**
 * dot (.) => any one char
 * arsterisk (*) => 0 or more preceeeding chars.
 * plus (+) => 1 or more preceeding chars.
 * ? => 0 or 1 preceeding char.
 */

// let str = "I am arvind raa raaa" ;
// a. => ai, a$, ax, aa
// let regexp = /a./g ;
// console.log(str.match(regexp)); // "am",  "ar", "av"

// ra* => "r", "ra", "raa", "raaa", "raaaa" 
// let regexp = /ra*/g ; // r(zero or more a's)
// console.log(str.match(regexp)); // 

// ra+ => ra , raa, raaa, raaaa, .... raaaaaaa
// let regexp = /ra+/g ;
// console.log(str.match(regexp ));
// console.log(str.replace(regexp, "D"));

// ra? => "r", "ra"
// let regexp = /ra?/g ;
// console.log(str.match(regexp));

// |

// /am|vin/ => 

// console.log(str.match(/am|vin/g));
// let str = "I am arvind raa raaa" ;
console.log(str.match(/[id]/gi));//"i" or "d"

