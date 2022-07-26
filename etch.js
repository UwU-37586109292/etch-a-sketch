let color = 'red';
const MAX_BOARD_SIZE = 100;
let randomMode = false;

createGrid(16);
document.querySelector('button.reset').addEventListener('click', resetBoard);
document.querySelector('button.new').addEventListener('click', drawNewBoard);
document.querySelector('button.hideLines').addEventListener('click', changeGridLineVisibility);
document.querySelector('button.colorsRandom').addEventListener('click', changeColorToRandomRoulette);
document.querySelector('#colorpicker').addEventListener('change', updateColorFromPicker);

function updateColorFromPicker(e) {
    color = e.target.value;
    randomMode = false;
}

function changeColorToRandomRoulette() {
    randomMode = true;
}

function changeGridLineVisibility() {
    const gridContainer = document.querySelector('.grid-container');
    const button = document.querySelector('button.hideLines');
    let currentGap = window.getComputedStyle(document.querySelector('.grid-container')).gap;
    if (currentGap === "1px") {
        gridContainer.style.gridGap = "0px";
        button.textContent = "Display grid lines";
    } else {
        gridContainer.style.gridGap = "1px";
        button.textContent = "Hide grid lines";
    }
}

function drawNewBoard() {
    let size = prompt('Provide size of new board');
    size = parseInt(size);
    if (typeof size === "number" && size <= MAX_BOARD_SIZE && size > 0) {
        removeBoard();
        createGrid(size);
        resetBoard();
    } else if (size > MAX_BOARD_SIZE || size < 1) {
        alert(`Maximum board size is ${MAX_BOARD_SIZE}! And minimum is 1`);
    } else {
        alert('Don\'t be too cheeky...');
    }
}

function removeBoard() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = "";
}

function createGrid(size) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('class', 'grid-element');
            gridContainer.appendChild(gridCell);
        }
    }

    const gridElementsList = document.querySelectorAll('.grid-element');
    gridElementsList.forEach(gridElement => {
        color = 'red';
        gridElement.addEventListener("mouseover", addBackground);
    });
}


function addBackground(event) {
    if (randomMode) {
        color = getRandomColor();
    }
    event.toElement.style.backgroundColor = color;
}
function getRandomColor() {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);

    return `rgb(${rgb1},${rgb2}, ${rgb3})`;
}
function resetBoard() {
    const gridElementsList = document.querySelectorAll('.grid-element');
    gridElementsList.forEach(gridElement => {
        gridElement.style.backgroundColor = 'white';
    }
    )
}