const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: 'sans',
    fontSize: 16,
    color: "#000",
    textAlign: "left", // "left", "center", "right"
    backgroundColor: "#fff",
    isBold: false,
    isItalic: false,
    isUnderlined: false
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
    fontSizeInput.value = optionsState.fontSize;
    fontFamilyInput.value = optionsState.fontFamily;
}

// resetOptions({
//     fontFamily: 'monospace',
//     fontSize: 19,
//     color: "#000",
//     textAlign: "left", // "left", "center", "right"
//     backgroundColor: "#fff",
//     isBold: false,
//     isItalic: false,
//     isUnderlined: false
// })
