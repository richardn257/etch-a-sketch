const container = document.querySelector('#container');
const gridCol = 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto';
container.setAttribute('style', `display: grid; grid-template-columns: ${gridCol}; width: 650px; height: 650px; border: 1px solid gray`);

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('style', 'border: 1px solid gray;');
    container.append(square);
}
