const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
const todoContainer = document.getElementById("todo");

createIssue.addEventListener("click", onCreateClick)


issueInput.addEventListener("blur", onBlurCreateIssueInput);
issueInput.addEventListener("keyup", onEnterInput);

function toggleCreateIssueOptions(){
    createIssue.classList.toggle("hide");
    issueInput.classList.toggle("hide");
    if(!issueInput.classList.contains("hide")){
        // if user sees the textarea then we need to autofocus onto it.
        issueInput.focus();
    }
}

function onBlurCreateIssueInput() {
    if(!issueInput.classList.contains("hide")){
        // if input is present then only hide it.
        toggleCreateIssueOptions();
    }
}

function onCreateClick(){
    toggleCreateIssueOptions();
}

function onEnterInput(e){ 
    if(e.keyCode === 13){
        // clicked on enter key.
        const issueName = issueInput.value ;
        if(!issueName){
            return ;
        }
        // create an issue card with the issueName:

        /**
         * <div class="card">
                <span>UI for excalidraw</span>
                <span class="material-icons">delete</span>
            </div>
         */

        const issueCard = document.createElement("div");
        issueCard.className = "card"; 

        issueCard.innerHTML = `
            <span>${issueName}</span>
            <span class="material-icons" onclick="deleteCard(this)">delete</span>
            `;

        issueCard.draggable = true ; 
        // since issue cards needs to draggable
        issueCard.addEventListener("dragstart", onDragStart);
        
        issueInput.value = "" ;
        todoContainer.appendChild(issueCard);
        toggleCreateIssueOptions();
    }
}

function deleteCard(deleteButton){
    const card = deleteButton.parentNode ;
    card.remove();
}   