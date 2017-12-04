
function makeGrid() {

  let table = document.getElementById("pixel_canvas");

  table.innerHTML = "";
  while(table.rows.length > 0)
    table.deleteRow(0);

  rows = document.getElementById("input_height").value;
  cols = document.getElementById("input_width").value;

  for (var i = 0; i < rows; i++) {
    var rowElement = table.insertRow(i);
    rowElement.setAttribute("class", "row");
    for (var x = 0; x < cols; x++) {
      var sqr= rowElement.insertCell(x);
      sqr.addEventListener("click", function(event) {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value;
      });
    }
  }
  return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});


$("#clearButton").click(function(){
    makeGrid();
  });
