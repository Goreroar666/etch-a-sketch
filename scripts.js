//Globals
const sketchPad = document.getElementById("main");
const clearButton = document.getElementById("clearBtn");
const chooseColor = document.getElementById("chooseColor");
const rainbowButton = document.getElementById("randomColor");
const output = document.getElementById("size");
let sliderValue = slider.value;
let rainbow = false; 
output.innerText = sliderValue;

//Functions

function makeGrid(sliderValue) {
    sketchPad.style.setProperty('--grid-rows', sliderValue);
    sketchPad.style.setProperty('--grid-columns', sliderValue);
    for (let i = 0; i < sliderValue * sliderValue; i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', drawColor);
    sketchPad.appendChild(cell).className = "grid-cell";
};
};

function drawColor(draw) {
    let color;
    if (rainbow) {
    color = random_rgba();
    } else {
    color = chooseColor.value;
    }
    draw.target.style.background = color;
}

function resetGrid() {
    sketchPad.innerHTML= '';
    makeGrid(sliderValue);
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//Buttons

rainbowButton.addEventListener ('click', function () {
    if (rainbow) {
        rainbow = false;
    } else {
        rainbow = true;

}});

clearButton.onclick = () => resetGrid();

slider.oninput = function() {
    output.innerText = this.value;
    sliderValue = this.value;
    resetGrid(sliderValue); 
}

//Default grid
makeGrid(16, 16);