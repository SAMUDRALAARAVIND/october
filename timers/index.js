// setTimeout is a globally available function .

/**
 * registrations = [ { func: f1, time: 3000 } , { func: f2 , time: 1000 }]
 *                          t = 0s                       t = 1ms
 *                          t = 3s                       t = 1001ms
 * output:
 *  "1"
 *  "2"
 *  "4"
 *  "3"
 *
 *
 *
 */
// console.log("1"); // t = 0s

// setTimeout(() => { // t = 2ms
//     console.log("3");
// }, 3000);

// console.log("2"); // t = 3ms
// 3000 milliseconds

// console.log(1); // t = 0ms

// setTimeout(() => { // t = 1ms
//     console.log(3);
// }, 2000)

// setTimeout(() => {
//     console.log(4);
// }, 2200)
// // t = 2ms
// for (let i = 0; i < 0.5 * 10e9; i++) { // 10e7 = 10 * 10^7 = 10^8
//     // loop takes 3.7s
// }
// // t = 3702 ms

// console.log(2); // t = 3703ms
// const timerElement = document.getElementById("timer");

// let i = 0;

// let callback = () => {
//     timerElement.innerText = ++i;
// };

// let id = setInterval(callback, 1000)

// function stopTimer() {
//     clearInterval(id);
// }
// console.log("init");
// let id = setTimeout(() => {
//     console.log("aravind");
// }, 5000)
// console.log(id);
// function stopTimer() {
//     clearTimeout(id);
// }

// epoch time => number of seconds from 1970 Jan 1 12:00AM

// 17th Dec 1999

// let d = new Date(1999, 11, 17, 12, 30, 44)
// let d1 = new Date();
// console.log((d1 - d) / 1000);