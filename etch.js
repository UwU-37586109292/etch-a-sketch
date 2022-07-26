let color = 'red';
const MAX_BOARD_SIZE = 100;


createGrid(15);
document.querySelector('button.reset').addEventListener('click', resetBoard);
document.querySelector('button.new').addEventListener('click', drawNewBoard);

function drawNewBoard() {
    let size = prompt('Provide size of new board');
    size = parseInt(size);
    if (typeof size === "number" && size <= 100 && size > 0) {
        removeBoard();
        createGrid(size);
        resetBoard();
    } else if (size > 100 || size < 1) {
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
    event.toElement.style.backgroundColor = color;
}

function resetBoard() {
    const gridElementsList = document.querySelectorAll('.grid-element');
    gridElementsList.forEach(gridElement => {
        gridElement.style.backgroundColor = 'white';
    }
    )
}