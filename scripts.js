const sketchPad = document.getElementById("main");
const clearButton = document.getElementById("clearBtn");
const chooseColor = document.getElementById("chooseColor");

let output = document.getElementById("size");
let sliderValue = slider.value;
let rainbow = false; 
output.innerText = sliderValue;


function makeGrid(sliderValue) {
sketchPad.style.setProperty('--grid-rows', sliderValue);
sketchPad.style.setProperty('--grid-columns', sliderValue);
for (let i = 0; i < sliderValue * sliderValue; i++) {
    let cell = document.createElement('div');
    sketchPad.appendChild(cell).className = "grid-cell";
};
};
makeGrid(16, 16);

sketchPad.addEventListener ("mouseover", function (draw) {
    draw.target.style.background = "green";
})

function resetGrid() {
sketchPad.innerHTML= '';
makeGrid(sliderValue);
}

clearButton.onclick = () => resetGrid();

slider.oninput = function() {
    output.innerText = this.value;
    sliderValue = this.value;
    resetGrid(sliderValue); 
}