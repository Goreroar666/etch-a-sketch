const sketchPad = document.getElementById("main");

function makeGrid(grid) {
const container = document.createElement('div');
container.id = "main";
container.className = "container";

for (let i=0; i<16; i++) {
    let row = document.createElement('div');
    row.className = "row";
    row.id = "row" + i;
   
    for (let j=0; j<16; j++) {
        let box = document.createElement('div');
        box.className= "box";
        box.id = "box" + j;
        row.appendChild(box);
    }
    container.appendChild(row);
}
grid.appendChild(container);
}
makeGrid(document.body);

main.addEventListener ("mouseover", function (event) {
    event.target.style.background = "red";
})