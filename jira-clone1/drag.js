const containers = document.querySelectorAll(".container");

const dragState = {
    draggedElement: null,
    parentContainer: null
}

function onDragStart(event){
    const draggedCard = event.target ; // card
    dragState.draggedElement = draggedCard ;
    dragState.parentContainer = draggedCard.parentNode ;
}

function onDragOver(event){ 
    const currentContainer = event.target.closest(".container");
    if(dragState.parentContainer.id === currentContainer.id){
        return ;
    }
    event.preventDefault();
    // if the source container is not equal to the current container then current container should be a droppable zone.
}

function onDrop(event){
    // within the current container drop the sourceElement.
    const dropContainer = event.target.closest(".container");
    dropContainer.appendChild(dragState.draggedElement);
}

for(let i = 0 ; i < containers.length; i++) {
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);
}