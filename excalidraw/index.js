const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;


const c = canvas.getContext("2d");
// c is the context object responsible for making any kind of drawings on the canvas.

// c.beginPath(); 
/**
 * Properties for stroking
 * 1. strokeStyle = color to be drawn.
 * 2. lineWidth = thickness of the line.
 */
// c.moveTo(200, 300); // starting point for the line.
// c.lineTo(400, 100); // ending point for the line.
// // c.strokeStyle = "red";
// c.lineWidth = 10 ;
// // c.globalAlpha = 1;
// c.stroke(); // stroke function draws the line with black color from p1 to p2
// c.closePath();


// Draw three lines 
// L1 : P1( 100, 50 ) , P2 ( 90, 200 )  => red colored , 3px thickness
// L2 : P1( 50, 150 ) , P2 ( 300, 40 ) => blue colored, 10px thickness
// L3 : P1(500, 500 ) , P2 (600 , 600 ) => tomato colored, 5px thickness.

function drawLine(p1, p2, color = "blue", thickness = 2) {
    c.beginPath();
    c.strokeStyle = color ;
    c.lineWidth = thickness; 
    c.moveTo(p1.x, p1.y);
    c.lineTo(p2.x, p2.y);
    c.stroke();
    c.closePath();
}   

// drawLine( {x: 100, y: 50 } , {x: 90, y: 200 }, "red", 3)
// drawLine( {x: 50, y: 150 } , {x: 300, y: 40 }, "blue", 10)
// drawLine( {x: 500, y: 500 } , {x: 600, y: 600 }, "tomato", 5)

/*
Dynamic line drawing: 

function onMouseDown(event) {
    let {clientX , clientY} = event; 
    // {clientX, clientY} is position where use makes the mousedown.
    c.beginPath(); 
    c.moveTo(clientX, clientY);// stats the line at this position
    c.lineWidth = 4 ;
    c.strokeStyle = "blue"; 
}

function onMouseUp(event){
    let {clientX, clientY} = event ;
    // {clientX, clientY} is the position where user makes the mouseup.
    // console.log(clientX, clientY);
    c.lineTo(clientX, clientY);
    c.stroke();
    c.closePath();
}
*/


// canvas.addEventListener("mousedown", onMouseDown); 
// canvas.addEventListener("mouseup", onMouseUp);


/*
// Continuos lines: 

c.beginPath();
c.strokeStyle = "red"; 
c.lineWidth  = 4 ;
c.moveTo( 100, 100 );  // p1
c.lineTo( 300, 100 ); // p2
c.stroke(); // p1 => p2
c.closePath();
c.beginPath();
c.moveTo(300, 100 );
c.lineTo( 350, 20 ) ;
c.lineWidth = 2;
c.strokeStyle = "blue"; 
c.stroke(); // strokes out from starting beginPath
*/

/**
 * Free hand drawing: 
 */


let drawingColor = "blue";
let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    // for the first time inside this  
    let currentPosition = [ e.clientX , e.clientY ];
    // draw line from previous position to current position ;
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}
