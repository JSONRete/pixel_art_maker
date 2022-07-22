const pickSize = document.getElementById("sizePicker")
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
pickSize.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
});

// this function adds grid table to dom from the size submitted parameters  
function makeGrid() {
    const fullTable = document.getElementById("pixelCanvas");
    const xRow = document.getElementById("inputWidth").value;
    const yColumn = document.getElementById("inputHeight").value;

fullTable.innerHTML = "";
let div = document.createElement("div")

// nested loop iterates to create grid table
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


// change individual cell color when pointer cursor clicks it
let colors = document.querySelectorAll("td");
colors.forEach(function (colorChange) {
    colorChange.addEventListener("click", function () {
        this.style.backgroundColor = document.querySelector("#colorPicker").value;
    }); 
});

}

