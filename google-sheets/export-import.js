function exportData() {
    let fileData = JSON.stringify(state);
    let blob = new Blob([fileData], { type: "application/json" })
    let url = URL.createObjectURL(blob);
    // <a href="fileaddress" download="sheet.json"></a>
    let link = document.createElement("a");
    link.href = url;
    link.download = "sheet.json";
    link.click();
}