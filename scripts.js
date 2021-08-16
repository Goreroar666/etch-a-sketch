const sketchPad = document.getElementById("main");

function makeGrid(rows, columns) {
sketchPad.style.setProperty('--grid-rows', rows);
sketchPad.style.setProperty('--grid-columns', columns);
for (let i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    sketchPad.appendChild(cell).className = "grid-cell";
};
};
makeGrid(16, 16);

sketchPad.addEventListener ("mouseover", function (event) {
    event.target.style.background = "green";
})