let dimensions = 16;

const main = document.querySelector('.main');

createGrid();

// Clear board when button is clicked
const reset = document.querySelector('.reset');
reset.addEventListener('click', clearGrid);

// Prompt user for dimension change when button is clicked
const newSize = document.querySelector('.dimensions');
newSize.addEventListener('click', changeDimensions);

function createGrid () {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (i = 0; i < dimensions; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
    
        // Generate the divs in one row.  There should be 'dimensions' amount of divs
        for (j = 0; j < dimensions; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
    main.appendChild(grid);
    //Event listener for hovering over a square
    const pixels = document.querySelectorAll('.column');
    pixels.forEach(pixel => pixel.addEventListener('mouseenter', draw));
}

// Event to turn pixel black
function draw (e) {
    e.target.classList.remove('column');
    e.target.classList.add('drawn');
} 

// Event for reset
function clearGrid() {
    const drawns = document.querySelectorAll('.drawn');
    drawns.forEach(drawn => drawn.classList.remove('drawn'));
    drawns.forEach(drawn => drawn.classList.add('column'));
}

// Event for prompting user and changing dimensions
function changeDimensions() {
    clearGrid();
    squares = Number(prompt("How many squares would you like per side?"));
    if (squares === NaN) {
        alert("Type valid integer between 1 - 100");
        return 0;
    }
    else if (squares < 1 || squares > 100 || squares % 1 !== 0) {
        alert("Use an integer between 1-100");
    }
    else {
        dimensions = squares;
        const grid = document.querySelector('.grid');
        main.removeChild(grid);
        createGrid();
    }

}