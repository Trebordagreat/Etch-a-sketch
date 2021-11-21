let dimensions = 16;
const grid = document.querySelector('.grid');


//Generate number of rows equal to dimensions
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

//Event listener for hovering over a square
const pixels = document.querySelectorAll('.column');
pixels.forEach(pixel => pixel.addEventListener('mouseenter', draw))

// Event to turn pixel black
function draw (e) {
    e.target.classList.remove('column');
    e.target.classList.add('drawn');
} 


