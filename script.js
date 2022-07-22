const delContainer = document.querySelector('.delContainer');
const createGrid = document.querySelector('.createGrid');
const container = document.querySelector('#container');
let mainContainer = container;

createGrid.addEventListener('click', () => {
    gridCol = '';
    let size = prompt('Enter the number of squares per sides for the grid', 16)
    for (let i = 1; i < size; i++) {
        gridCol += 'auto '
    }
    gridCol += 'auto';
    // mainContainer.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid black`);
    // console.log(mainContainer.childNodes.length);

    // const squaresCollection = document.getElementsByClassName('square');
    // for (let i = container.childNodes.length - 1; i > -1; i--) {
    //     container.removeChild(squaresCollection[i]);
    //     // console.log(i)
    // }
    delContainer.removeChild(mainContainer);
    const newContainer = document.createElement('div');
    // newContainer.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid black`);
    mainContainer = newContainer;
    delContainer.append(mainContainer);
    // console.log(container.childNodes.length);
    grid(size, gridCol);
});

function grid(size, gridCol) {
    mainContainer.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid black`);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.setAttribute('style', 'border: 1px solid black;');
        // square.addEventListener('mouseenter', () => {
        //     square.setAttribute('style', 'background-color: black');
        // });
        mainContainer.append(square);
    }
    // delContainer.append(container);
    // console.log(container.childNodes.length);
    // container.append(delContainer);
}


let gridCol = 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';
grid(16, gridCol);