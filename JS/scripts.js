/*
prompt user for a grid size 
    set a variable to that input

loop until counter var is as big as user input
    create a div child to .container
    
make sure the new divs are in a square grid
make sure that the total space of the grid stays the same, regardless of the size

when a mouse hovers one of the divs
    change color of the div
*/


//remove comment to make grid size based on user input
/*
let gridSize = 0;
while(gridSize < 16 || gridSize > 100) {
    gridSize = prompt("Enter a size for the grid, less than 100 and greater than 16:");
}
gridSize = gridSize * gridSize;
*/

//switch input to gridSize when that gets un-commented
createGrid(256);


function createGrid(size) {
    for(let i = 0; i < size; i++){
        const container = document.getElementById("container");
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.appendChild(newDiv);
    }
}

