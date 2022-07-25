createGrid(16);

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
}

const gridElementsList = document.querySelectorAll('.grid-element');
gridElementsList.forEach(gridElement => {
    gridElement.addEventListener("mouseover", addBackground);
});

function addBackground(event) {
    console.log(event);
    event.toElement.style.backgroundColor = 'red';
    // element.style.addBackground = 'red';
}