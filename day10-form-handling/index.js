// const button = document.getElementById("btn");
// const input = document.querySelector("input");

// button.addEventListener("click", () => {
//     console.log(typeof input.value);
// })

// onchange => whenever there's a change in the input this event will be triggered

// input.addEventListener("change" , () => {
//     console.log(input.value);
// }); 

// input.addEventListener("focus", () => {
//     console.log("input focused");
// })

// input.addEventListener("blur", () => {
//     console.log("input blur");
// })

// input.addEventListener("input", () => {
//     console.log("inside callback");
// })

// let select = document.querySelector("select");

// select.addEventListener("change", () => {
//     console.log(select.value);
// })

const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    // prevent the default behaviour
    event.preventDefault();
    let userData = { 
        name: form.name.value ,
        email: form["email"].value,
        roll: form["rollNumber"].value ,
        gender: form.gender.value
    }
    console.log(userData);
    form.reset();
})