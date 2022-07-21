const createGrid = document.querySelector('.createGrid');
const container = document.querySelector('#container');
let gridCol = 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';

let size = 256;
createGrid.addEventListener('click', () => {
    gridCol = '';
    size = prompt('Enter the number of squares per sides for the grid', 16)
    for (let i = 1; i < size; i++) {
        gridCol += 'auto '
    }
    gridCol += 'auto';
    container.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid black`);
    container.length;
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', 'border: 1px solid gray;');
        // square.addEventListener('mouseenter', () => {
        //     square.setAttribute('style', 'background-color: black');
        // });
        container.append(square);
    }
});

function grid() {
    container.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid black`);

    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', 'border: 1px solid gray;');
        // square.addEventListener('mouseenter', () => {
        //     square.setAttribute('style', 'background-color: black');
        // });
        container.append(square);
    }
}

grid()