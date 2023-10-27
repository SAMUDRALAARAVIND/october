
let intialPosition = null;

// this arrays will hold the image objects after every mouse up.
const history = [];
let historyIndex = -1;

function onMouseDown(e) {
    if (!(actions.circle || actions.rectangle || actions.eraser || actions.freehand || actions.line)) {
        return;
    }
    console.log("inside");
    intialPosition = { x: e.clientX, y: e.clientY };
    startIndex = history.length - 1;
    c.strokeStyle = formState.strokestyle;
    c.lineWidth = formState.strokewidth;

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(e) {
    const currentPosition = { x: e.clientX, y: e.clientY };
    if (actions.freehand) {
        drawFreeHand(currentPosition);
    }
    else if (actions.eraser) {
        handleErase(currentPosition);
    }
    else if (actions.circle) {
        resetToOriginalImage();
        drawCircle(currentPosition);
    }
    else if (actions.rectangle) {
        resetToOriginalImage();
        drawRectangle(currentPosition);
    }
    else if (actions.line) {
        resetToOriginalImage();
        drawLine(currentPosition);
    }
}

function onMouseUp() {
    // cleanup
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseup", onMouseUp);
}

canvas.addEventListener("mousedown", onMouseDown);

function resetToOriginalImage() {
    if (startIndex !== -1) {
        // we have some drawings before we start the rectangle drawing.
        c.putImageData(history[startIndex], 0, 0);
    }
    else {
        // if i do not have drawings before we start rectangle drawing.
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function drawFreeHand(currentPosition) {
    c.beginPath();
    c.moveTo(intialPosition.x, intialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.lineCap = "round";
    c.lineJoin = "round";
    c.stroke();
    c.closePath();
    intialPosition = currentPosition;
}

function handleErase(currentPosition) {
    c.clearRect(currentPosition.x, currentPosition.y, 10, 10);
}

function drawCircle(currentPosition) {
    c.beginPath();
    const radius = Math.sqrt(
        (currentPosition.x - intialPosition.x) ** 2 +
        (currentPosition.y - intialPosition.y) ** 2
    );

    c.arc(intialPosition.x, intialPosition.y, radius, 0, 2 * Math.PI, true);
    c.stroke();
}

function drawRectangle(currentPosition) {
    c.beginPath();
    // draw rectangle
    let width = currentPosition.x - intialPosition.x;
    let height = currentPosition.y - intialPosition.y;
    c.strokeRect(intialPosition.x, intialPosition.y, width, height);
}

function drawLine(currentPosition) {
    c.beginPath();
    c.moveTo(intialPosition.x, intialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.stroke();
}