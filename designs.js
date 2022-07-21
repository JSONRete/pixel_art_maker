// const pickSize = document.querySelector("sizePicker")
const pickSize = document.getElementById("sizePicker")

// Select color input
// Select size input
pickSize.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
});
// }, false);

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const fullTable = document.getElementById("pixelCanvas");
    const xRow = document.getElementById("inputWidth").value;
    const yColumn = document.getElementById("inputHeight").value;
    console.log(`Height ${yColumn} and width: ${xRow}`);
fullTable.innerHTML = "";
let table = document.createElement("table")
for (let row = 0; row < xRow; row++) {
    let tr = document.createElement("tr");
    for (let column = 0; column < yColumn; column++){
        let td = document.createElement("td")
        td.appendChild(document.createTextNode(""));
        tr.appendChild(td);
    }
    table.appendChild(tr)

}
fullTable.appendChild(table)

}

