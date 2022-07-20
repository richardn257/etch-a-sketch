const container = document.querySelector('#container');
const gridCol = 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';
container.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 500px; height: 500px; border: 1px solid gray`);

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('style', 'border: 1px solid gray;');
    square.addEventListener('mouseenter', () => {
        square.setAttribute('style', 'background-color: black');
    });
    container.append(square);
}
