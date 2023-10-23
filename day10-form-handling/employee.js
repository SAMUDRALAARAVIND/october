const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

function deleteRecord(event) {
    const buttonRef = event.target ;
    const row = buttonRef.parentNode.parentNode; // grand parent node.
    row.remove(); // detaches the tr from DOM tree.
}

function addEmployee(employee) {
    /**
     * employee: { name: "Aravind", email: "", salary: "", companyName: "", role: "", gender: ""}
     */
    // takes an employee Object and adds it to the table.
    const tr = document.createElement("tr");
    for(let key in employee) {
        const td = document.createElement("td");
        td.innerText = employee[key]
        tr.appendChild(td);
    }

    // <td><button>delete</button></td>
    const options = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete" ;
    // deleteButton => it is a HTML element.
    deleteButton.addEventListener("click", deleteRecord)

    options.appendChild(deleteButton);

    tr.appendChild(options)
    tbody.appendChild(tr);
}

// onSubmitForm => will be executed whenever user submits the new employee details.
function onSubmitForm(event) {
    event.preventDefault(); // to avoid the submission and reload of the page.
    let employeeData = { 
        name: form.name.value,
        companyName: form.companyName.value,
        salary: form.salary.value,
        gender: form.gender.value,
        role: form.role.value,
        email: form.email.value
    }

    addEmployee(employeeData);
    // form.reset();
}

form.addEventListener("submit", onSubmitForm)
