const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

const actionButtons = document.querySelectorAll("#actionbuttons > .btn");

const form = document.querySelector(".form");

const formState = {
    strokewidth: 3,
    strokestyle: "black"
}

const actions = {
    freehand: false,
    rectangle: false,
    eraser: false,
    circle: false,
    line: false,
}

function toggleMenu() {
    form.classList.toggle("hide");
}

function onInput(element) {
    const newValue = element.value;
    if (element.name === "strokewidth")
        formState[element.name] = parseInt(newValue);
    else
        formState[element.name] = newValue;

    console.log(formState);
}


function onActionClick(element) {
    const actionName = element.id;
    actionButtons.forEach(btn => {
        // for the remaining three options if active class present remove that clas.
        if (btn.classList.contains("active") && btn.id !== actionName) {
            btn.classList.remove("active");
        }
    })
    element.classList.toggle("active");

    actionButtons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        // {freehand: "active", rectangle: '', circle: '', eraser: ''}
        actions[btn.id] = isActive;
    })
    console.log(actions);
}