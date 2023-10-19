
/**
 * 1. Manipulation of an existing node.
 * 2. removing a node from the DOM tree. (UI)
 * 3. adding new nodes into the tree.
 */

// function action() {
    // manipulation
//     const input = document.getElementById("rollnumber"); 
//     input.type = "text" ;
// }

/*
function action(){ 
    // remove bold element from the DOM tree.
    // const bold = document.querySelector("#container>.child>b");
    // bold.remove();

    // // if i query the dom tree for removed element
    // let secondTime = document.querySelector("#container>.child>b")
    // console.log(secondTime); // null


    // i want to remove div.child
    const div = document.querySelector("#container > .child")
    div.remove();
    const bold = document.querySelector("#container>b");
    console.log(bold);
}
*/

// function action() {
//     // add a new element into the DOM tree.
//     /**
//      * For adding new element
//      * 1. create the element( object ).
//      * 2. then we add that newly element into the tree wherever we need.
//      */

//     /*
//         let bharath = document.createElement("p"); // creates a fresh `p` element.
//         // <p>India won</p>
//         // <p>Pakistan lost</p>
//         bharath.innerText = "India won";

//         const paki = document.createElement("p");
//         paki.innerText = "Pakistan lost";

//         const parent = document.querySelector(".child");
//         // parent.appendChild(bharath); // adds the new element the last of the children.
//         // parent.appendChild(paki);
//         parent.append(bharath, paki);
//         //createElement() => creates a new HTML element object in the HEAP memory returns it.
//     */

//     // insert before bold  inside .child

//     /*
//         let para = document.createElement("p");
//         para.innerText = "aravind" ;
//         let parent = document.querySelector(".child");
//         // let bold = document.querySelector(".child > b");
//         const span  =document.querySelector(".child > span");

//         parent.insertBefore(para , null);
//     */

//     /**
//      * <div>
//      *     <p>Kohli: 103</p>
//      *     <b>Rohith Sharma: 48</p>
//      * </div>
//      */

//     const div = document.createElement("div");
//     const p = document.createElement("p");
//     p.innerText = "Kohli : 103" ;
//     const b = document.createElement("b");
//     b.innerText = "Rohith: 48" ;

//     div.append(p, b);

//     const container = document.getElementById("container");
//     document.body.insertBefore( div , container)
    
//     // const list = document.getElementsByTagName("body"); // [ ] 
//     // const body = list[0]; 
//     // const body = document.body; 
//     // const container = document.getElementById("container");

//     // body.insertBefore(div, container);
// }


/*
function action() {
    let child = document.querySelector(".child");

    let targetElement = child.children[2]; // insert before 3rd element.

    const newElement = document.createElement("b");
    newElement.innerText = "Samudrala Aravind" ;

    child.insertBefore( newElement , targetElement)
}
*/

