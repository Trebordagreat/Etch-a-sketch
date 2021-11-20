let dimensions = 16;
const main = document.querySelector('.main');

// Generate the divs in one row.  There should be 'dimensions' amount of divs
const row = document.createElement('div');
row.classList.add('row');
main.appendChild(row);

for (i = 0; i < dimensions; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column);
}



