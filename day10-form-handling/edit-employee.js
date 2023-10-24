const mutateEditStateButton = document.getElementById("test");

mutateEditStateButton.addEventListener("click", () => {
    // do not clear the form just change the behaviour ( from update => add employee );
    editOptions = {
        isEditing : false,
        rowElement: null
    }

    form.reset();

    submitButton.innerText = "Add Employee"; 
})

let editOptions = {
    isEditing: false,
    rowElement: null
}

function onEditClick(event) {
    const row = event.target.parentNode.parentNode ;
    // row = HTML element => <tr></tr>
    const cells = row.querySelectorAll("td");
    let employeeInfo = {
        name: cells[0].innerText,
        companyName: cells[1].innerText,
        salary: cells[2].innerText,
        gender: cells[3].innerText,
        role: cells[4].innerText, 
        email: cells[5].innerText,
    }

    preFillForm(employeeInfo);

    editOptions = {
        isEditing: true,
        rowElement: row
    }

    submitButton.innerText = "Update"; 
}

function preFillForm(employee) {
    // takes an employee object and fills all the inputs inside form.

    // form.name.value = employee.name
    // form.email.value = employee.email ;
    // form.salary.value = employee.salary ;
    // form.gender.value = employee.gender ;
    // form.companyName.value = employee.companyName; 
    // form.role.value = employee.role; 

    for(let i in employee){
        form[i].value = employee[i] ;
    }
}

function editEmployee(employee) {
    // edit the tr with new employee data.  

    const rowElement = editOptions.rowElement ;

    let cells = rowElement.querySelectorAll("td");
    cells[0].innerText = employee.name ;
    cells[1].innerText = employee.companyName;
    cells[2].innerText = employee.salary ;
    cells[3].innerText = employee.gender; 
    cells[4].innerText = employee.role ;
    cells[5].innerText = employee.email;

    submitButton.innerText = "Add Employee";

    // we need to reset the edit options state.
    editOptions = {
        isEditing: false,
        rowElement: null
    }
}