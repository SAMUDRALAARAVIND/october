const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("#form")

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: 'sans',
    fontSize: 16,
    color: "#000000",
    textAlign: "left", // "left", "center", "right"
    backgroundColor: "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    value: ''
}

function onCellFocus(event) {
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if (state[elementId]) {
        // already selected cell
        // fill the options with the state of that cell
        resetOptions(state[elementId]);
    }
    else {
        // selected for the first time
        // fill the options with default state
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState) {
    // updates the UI as per the optionsState
    /**
     * optionsState = {
     *    fontSize: ,
     *    fontFamily: ,
     *    color: '',
     *    textAlign: ''
     * }
     */
    form.fontfamily.value = optionsState.fontFamily;
    form.fontsize.value = optionsState.fontSize;
    form.textalign.value = optionsState.textAlign; // "right" | "left" | "center"
    form.bold.checked = optionsState.isBold
    form.italic.checked = optionsState.isItalic;
    form.underlined.checked = optionsState.isUnderlined;
    form.textcolor.value = optionsState.color;
    form.bgcolor.value = optionsState.backgroundColor;
}

function onFormChange() {
    if (!activeElement) {
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }


    let currentState = {
        textColor: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underlined.checked,
        textAlign: form.textalign.value // "left" , "right" , "center"
    }

    // below function applies all the styles to the active cell.
    applyStylesToCell(currentState);

    // update the state object for the current cell.
    // state = {} 
    // state["C2"] = currentState ;
    // state = { C2: currentState }
    state[activeElement.id] = { ...currentState, value: activeElement.innerText };
}

function applyStylesToCell(styleObject) {
    // it will take the style object and applies it to the currently selected cell.
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;

    activeElement.style.fontWeight = styleObject.isBold ? "bold" : "normal";
    activeElement.style.fontStyle = styleObject.isItalic ? "italic" : "normal";
    activeElement.style.textDecoration = styleObject.isUnderlined ? "underline" : "none";
}