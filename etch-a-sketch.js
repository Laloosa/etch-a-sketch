// 16x16 grid of divs
function createGrid() {
    for (let row = 0; i <= 15; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let col = 0; col <= 15; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
    }
}

const container = document.querySelector("#container");
createGrid();