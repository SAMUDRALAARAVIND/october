let data = {
    name: "aravind",
    age: 22,
    college: "something",
    role: "Dev",
    company: "Acciojob"
}

const a = document.querySelector("a");

function createAndDownloadFile() {
    let fileData = JSON.stringify(data);
    let file = new Blob([fileData], { type: "application/json" });
    let url = URL.createObjectURL(file);
    // it creates a url with file data instantly
    // console.log(url);
    a.href = url;
}

// function Temp() {
//     // creates an empty object inside the function ( when we use new operator in front of invocation )
//     // {} // #400
//     // if a function starts with capital letter we call => constructor function.
//     // console.log("object");
//     // this == #400
//     this.name = "aravind"; // #400 = { name: "aravind" }
// }
// let x = new Temp(); // x = #400 => { name: "aravind" }
// // x is an instace of Temp function.
// console.log(x); // Temp {}