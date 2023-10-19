

const button = document.getElementById("test") ;
/*
// addEventListener( eventName, function )

const f1 = () => {
    console.log("inside f1");
}
const f2 = () => {
    console.log("inside f2");
}

button.addEventListener("click",f1);
button.addEventListener("click",f2);
// the callback function `f` will be called whenever event occurs.

function x() {
    // this function should remove the `f1` listener for button.
    // removeEventListener(eventName, registered function)
    button.removeEventListener("click", f1);
    console.log("listener f1 is been removed");
}
*/


const box = document.querySelector(".test");

// box.addEventListener("mouseenter", () => {
//     // box.classList.add("active");
//     box.classList.toggle("active");
// });

// box.addEventListener("mouseleave", () => { 
//     box.classList.toggle("active");
// });

// box.addEventListener("click", (event) => {
//     console.log({x: event.clientX, y: event.clientY});
// });

// 4 Sum Solution.
function callme(target){
    let nums =[3, 2, 1, 4, 5, 5, 9, 10];
    //               i  j            k

    /**
     * {
     *  3: 1,
     *  2: 1,
     *  1: 1,
     *  4: 1, 
     *  5: 2,
     *  9: 1,
     *  10: 1
     * }
     */
    let obj = {} ;
    nums.forEach(e => {
        if(obj[e]) obj[e] ++ ;
        else obj[e] = 1
    })

    for(let i=0 ;i<nums.length-3 ;i++){
        obj[nums[i]] --;
        for(let j=i+1 ;j<nums.length-2;j++){
            obj[nums[j]] -- ;
            for(let k=j+1;k<nums.length-1;k++){
                obj[nums[k]] --;
                if(obj[target - (nums[i] + nums[j] + nums[k])]) {
                    return true; 
                }
                obj[nums[k]] ++;
            }
            obj[nums[j]] ++;
        }
        obj[nums[i]] ++
    }
    return false;
}
console.log(callme(25));