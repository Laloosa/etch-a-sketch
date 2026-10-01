// 16x16 grid of divs, squares laid left to right
function createGrid(number) {
    for (let row = 0; row < number; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let col = 0; col < number; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                let currentOpacity = Number(square.style.opacity);
                let newOpacity = currentOpacity + 0.1;
                square.style.opacity = newOpacity;
                console.log(newOpacity);
                square.style.backgroundColor = randomRGB();
            })
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
    }
}

function randomRGB() {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    return "rgba(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
}

const container = document.querySelector("#container");
const body = document.querySelector("body");
const inputButton = document.createElement("button");
inputButton.textContent = "Change grid size";
body.insertBefore(inputButton, container);
inputButton.addEventListener("click", () => {
    let input = prompt("How many squares per side for new grid? (max 100)");
    if (input > 100) {
        alert("Cannot create grid bigger than 100x100.");
    }
    else {
        // removes all children of container
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(input);
    }
});
createGrid(16); //default when page loads