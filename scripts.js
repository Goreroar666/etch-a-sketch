const sketchPad = document.getElementById("main");
let range = document.getElementById("slider");
let output = document.getElementById("size");
let sliderValue = slider.value;
output.innerText = slider.value;


function makeGrid(columns, rows) {
sketchPad.style.setProperty('--grid-rows', rows);
sketchPad.style.setProperty('--grid-columns', columns);
for (let i = 0; i < columns * rows; i++) {
    let cell = document.createElement('div');
    sketchPad.appendChild(cell).className = "grid-cell";
};
};
makeGrid(16, 16);

sketchPad.addEventListener ("mouseover", function (draw) {
    draw.target.style.background = "green";
})

const clearButton = document.getElementById("clearBtn");

clearButton.addEventListener ('click', function (event) {
window.location.reload();
});

slider.oninput = function() {
    output.innerText = slider.value;
}
    slider.addEventListener ("change", () => {
        let oldCells = document.getElementById("main");
        while (oldCells.firstChild) {
            oldCells.removeChild(oldCells.firstChild);
        }
        makeGrid(sliderValue, sliderValue)
    })