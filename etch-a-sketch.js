// 16x16 grid of divs, squares laid left to right
function createGrid(number) {
    for (let row = 0; row < number; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let col = 0; col < number; col++) {
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
    // removes all children of container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(input);
});
createGrid(16); //default when page loads