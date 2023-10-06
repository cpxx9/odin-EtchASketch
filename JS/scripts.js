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


let gridSize = 0;
while(gridSize < 16 || gridSize > 100) {
    gridSize = prompt("Enter a size for the grid, less than 100 and greater than 16:");
}

let gridWidthHeightValue = 512 / parseInt(gridSize);
gridWidthHeightValue = gridWidthHeightValue + "px";

createGrid(gridSize);

let gridBox = document.querySelectorAll(".grid");
gridBox.forEach(box => {
    box.addEventListener('mouseover', () => box.classList.add("hover"));
});

function createGrid(size) {
    for(let i = 0; i < (size * size); i++){
        const container = document.getElementById("gridArea");
        const newDiv = document.createElement("div");
        newDiv.style.width = gridWidthHeightValue;
        newDiv.style.height = gridWidthHeightValue;
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    }
}

function refreshPage() {
    window.location.reload();
}
