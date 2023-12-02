const simple = ['red', 'darkgoldenrod', 'chartreuse', 'chocolate', 'darkred'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let colorSet = 'simple';

function setColor(color) {
    colorSet = color;
    document.querySelector('.js-simple-hex-color').textContent = 'color';
}

function randomColor() {
    let color;
    if (colorSet === 'simple') {
        color = simple[Math.floor(Math.random() * simple.length)];
    } else if (colorSet === 'hex') {
        let colorName = '#';
        for (let i = 0; i < 6; i++) {
            colorName += hex[Math.floor(Math.random() * hex.length)];
        }
        color = colorName;
    }
    document.querySelector('.container').style.backgroundColor = color;
    document.querySelector('.js-simple-hex-color').textContent = color;
}