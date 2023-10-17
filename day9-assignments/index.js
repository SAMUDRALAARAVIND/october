/*
let colors = {
    red: "red",
    blue: "blue",
    green: "green",
    abc: undefined
}

function hasKey(key) {
    // return boolean true => if the key present else false
    for(let i in colors) {
        if(i === key) {
            return true;
        }
    }
    return false ;
}
*/

/*

const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

let numberOfBooksRead  = 0 ;
library.forEach((book) => {
    if(book.readingStatus) numberOfBooksRead ++;
})
console.log(numberOfBooksRead);

*/

/*

// TODO: after DOM classes make sure to add more solution to it

let arr = ['Tajmahal', 'The Virupaksha Temple', 'Victoria Memorial'];

function getArticleLessString(input) {
    // example: input: "The tajmahal an umberilla" , output: "tajmahal umberiall"

    // words = "The tajmahal an umberilla".split(" ") = [ "The", "tajmahal", "an", "umberilla" ] 
    // nonArticleWords = [ "tajmahal", "umberilla"].join(" ") => "tajmahal umberilla"

    let words = input.split(" ");
    let nonArticleWords = words.filter(
        // words = [ "The", "tajmahal", "an", "umberilla" ] 
        (word) => {
            let smallCaseWord = word.toLowerCase();
            if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
                return false;
            }
            return true ;
        }
    );

    // nonArticleWords = [ "tajmahal", "umberilla" ]

    return nonArticleWords.join(" "); //  "tajmahal umberilla"
}

let hashMap = {} ;
let arr1 = [] ;

for(let i = 0; i < arr.length; i++) {
    let articleLessString = getArticleLessString(arr[i]);
    hashMap[articleLessString] = arr[i];
    arr1.push(articleLessString);
}
// arr1 = [ 'Tajmahal', 'Virupaksha Temple' , 'Victoria Memorial']
arr1.sort();
// arr1 = [ 'Tajmahal', 'Victoria Memorial' , 'Virupaksha Temple']
let outputList = [] ;
// [ "Tajmahal", "Victoria Memorial", 'The Virupaksha Temple']
arr1.forEach((newString) => {
    outputList.push( hashMap[newString] ) ; // 
})

console.log(outputList);
*/

// Decimal to Binary
/*
let num = 13 , output = "" ;
while(num >= 2) {
    let reminder = num % 2 ; 
    output = reminder + output;
    num = parseInt(num / 2) ;
}
if(num === 1){
    output = 1 + output ;
}
console.log(output);
*/

/*
// 3 sum problem
let arr = [-1, 2, 1, 4],
  target = 1;

let intialDiff = Infinity, ans = -1; 

let n = arr.length;
for (let i = 0; i <= n - 3; i++) {
  for (let j = i + 1; j <= n - 2; j++) {
    for (let k = j + 1; k <= n - 1; k++) {
        let sum = arr[i] + arr[j] + arr[k] ;
        let diff = Math.abs(sum - target);
        if(intialDiff > diff) {
            ans = sum;
        }
    }
  }
}

*/

/*

// Find the logic
let str = "Hi, my name is ted. I am fine"

let words = str.split(" ")

let outputWords = words.map((word, index) => {
    if(index % 2 === 0) return word ;
    return [...word].reverse().join("");
})

let output = outputWords.join(" ")
console.log(output);


 // let word = "abc";
 // [..."abc"] => ["a", "b", "c"].reverse() => ["c", "b", "a"].join("") => "cba"
 // [...word].reverse().join("")
 */


 

