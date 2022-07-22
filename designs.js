const pickSize = document.getElementById("sizePicker")
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
pickSize.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    const fullTable = document.getElementById("pixelCanvas");
    const xRow = document.getElementById("inputWidth").value;
    const yColumn = document.getElementById("inputHeight").value;


fullTable.innerHTML = "";
let div = document.createElement("div")
for (let column = 0; column < yColumn; column++){
    let tr = document.createElement("tr")
    for (let row = 0; row < xRow; row++) {
        let td = document.createElement("td");
            td.appendChild(document.createTextNode(""));
            tr.appendChild(td);
    }
    div.appendChild(tr)
}
fullTable.appendChild(div)

let color = document.querySelectorAll("td");
color.forEach(function (color) {
    color.addEventListener("click", function () {
        this.style.backgroundColor = document.querySelector("#colorPicker").value;
    }); 
});

}

