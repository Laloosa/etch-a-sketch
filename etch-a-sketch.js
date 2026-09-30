// 16x16 grid of divs, squares laid left to right
function createGrid() {
    for (let row = 0; row <= 15; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let col = 0; col <= 15; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black";
            })
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
    }
}

const container = document.querySelector("#container");
const body = document.querySelector("body");
const inputButton = document.createElement("button");
inputButton.textContent = "Change grid size";
body.insertBefore(inputButton, container);
inputButton.addEventListener("click", () => {
    let input = prompt("How many squares per side for new grid? (max 100)");
});
createGrid();