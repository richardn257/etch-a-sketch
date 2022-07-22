const delContainer = document.querySelector('.delContainer');
const createGrid = document.querySelector('.createGrid');
const container = document.querySelector('#container');
let mainContainer = container;

createGrid.addEventListener('click', () => {
    let cancel = false;
    gridCol = '';
    let size = prompt('Enter the number of squares per sides for the grid', 16);
    while (size > 100 || size < 1) {
        if (size == null) {
            cancel = true;
            break;
        }
        if (size > 100)
            size = prompt('The maximum is 100. Enter again.');
        else if (size < 1)
            size = prompt('The minimum is 1. Enter again.');
    }
    for (let i = 0; i < size; i++)
        gridCol += 'auto '

    if (!cancel) {
        delContainer.removeChild(mainContainer);
        const newContainer = document.createElement('div');
        mainContainer = newContainer;
        delContainer.append(mainContainer);
        grid(size, gridCol);
    }
});

function grid(size, gridCol) {
    mainContainer.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 600px; height: 600px; border: 1px solid black`);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.setAttribute('style', 'border: 1px solid black;');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
        mainContainer.append(square);
    }
}


let gridCol = 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';
grid(16, gridCol);