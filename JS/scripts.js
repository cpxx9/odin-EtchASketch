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

createGrid(16);
let isDrawing = false;
const playArea = document.querySelector('.playArea');
playArea.addEventListener('mousedown', () => isDrawing = true);
playArea.addEventListener('mouseup', () => isDrawing = false);

function createGrid(size) {
    let gridWidthHeightValue = 512 / parseInt(size);
    gridWidthHeightValue = gridWidthHeightValue + "px";

    for(let i = 0; i < (size * size); i++){
        const container = document.getElementById("GRIDAREA");
        const newDiv = document.createElement("div");

        newDiv.style.width = gridWidthHeightValue;
        newDiv.style.height = gridWidthHeightValue;

        newDiv.classList.add('grid');
        
        container.appendChild(newDiv);
    }

    let gridBox = document.querySelectorAll(".grid");

    gridBox.forEach(box => {
      box.addEventListener('mouseover', () => {
        if(isDrawing) {
          box.classList.add("hover")
        } 
      });
    });
}

function resetGame() {
    const gridAreaDiv = document.getElementById("GRIDAREA");
    gridAreaDiv.innerHTML = '';   

    let gridSize = 0;

    while(gridSize < 16 || gridSize > 100) {
        gridSize = prompt("Enter a size for the grid, less than 100 and greater than 16:");
    }

    createGrid(gridSize);
}

function refreshPage() {
    window.location.reload();
}
