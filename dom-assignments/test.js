/**
 * const scrollContainer = document.querySelector(".scroll-container"); 

let elementNumber = 1 ;

function addTenElements(){
    for(let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.innerText = `Item ${elementNumber++}`
        scrollContainer.appendChild(li);
    }
}

scrollContainer.addEventListener("scroll", () => {
    const totalScrollableHeight = scrollContainer.scrollHeight ;
    const visibleHeight = scrollContainer.clientHeight ;
    const scrolledHeight = scrollContainer.scrollTop ;
    let remainingHeightTobeScrolled = totalScrollableHeight - visibleHeight - scrolledHeight ;
    console.log(remainingHeightTobeScrolled);
    if(remainingHeightTobeScrolled <= 4) {
        addTenElements();
    }
})

addTenElements();
 */

// const div = document.getElementById("test");
// console.log({
//     innerText: div.innerText,
//     innerHTML: div.innerHTML,
//     textContent: div.textContent
// });

// let x = {
//     innerText: `div text\n\npara text Bold text`,
//     innerHTML: `\n        div text\n        <p>\n            para text <b>Bold text</b>\n        </p>\n    `,
//     textContent: `\n        div text\n        \n            para text Bold text\n        \n    `
// }

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded content");
})