const block = document.querySelector(".block");
const container = document.querySelector(".container");

/*

On block  : 

1. dragstart 
2. dragend

On Container : 

1. dragenter
2. dragover
3. dragleave
4. drop => triggers whenever a dragged element is dropped inside the container.


*/

function onDragStart(){
    console.log("dragging started");
}

function onDragEnd() {
    console.log("dragging ended");
}

// block.addEventListener("dragstart", onDragStart)
// block.addEventListener("dragend", onDragEnd)

// container.addEventListener("dragenter", () => {
//     console.log("some dragged element entered the container");
// })

container.addEventListener("dragover", (event) => {
    // i want to enable dropping. 
    // by default dropping is not allowed.
    event.preventDefault();
    // console.log("dragging over container....");
})

// container.addEventListener("dragleave", () => {
//     console.log("dragged element left container.");
// })

container.addEventListener("drop", () => {
    // console.log("dropped the element");
    // appending block inside container.
    // element.cloneNode() => will return a copy of the element.
    let blockCopy = block.cloneNode(true);
    // block = #200
    // cloneNode(block) => cloneNode(#200) => #300
    console.log(blockCopy);
    container.appendChild(blockCopy);
})


// let user = {name: "aravind"} // #100
// // let user1 = user ; // user1 = #100
// let user1 = {...user}; // user1 = #200
// console.log(user1 === user); // false


// let user = {
//     name: "aravind",
//     address: {
//         city: "Bangalore"
//     }
// }

// // user = #100 , user.address = #150

// let user1 = user ; // user1 = #100, user1.address = #150
// console.log(user1.address === user.address, user1 === user);// true
// let user2 = {...user}; // user2 = #200, user2.address = #150
// console.log(user2.address === user.address, user2 === user); // true



// // user3 is a deep copy of user object.
// let user3 = {...user, address: {...user.address}} ; // user3 = #800
// // {name: "aravind",  address: #400 }
// console.log(user3, user);
// console.log(user3.address === user.address, user3 === user); // true
