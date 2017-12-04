

//The makeGrid() function makes the grid based on the values of heigth and width.
function makeGrid() {

  let table = document.getElementById("pixel_canvas");

//This is a simple way to clear the grid properly.
  table.innerHTML = "";

//The <rows> and <cols> get the value inserted on the box using the getElementById method;
  rows = document.getElementById("input_height").value;
  cols = document.getElementById("input_width").value;

/*Bellow I use the for loop to insert a Row and a Cell (at the beginnig of a row) for
the ammount inserted at the input_height and input_width (respecting the "required", "min" and
"max" attributes). I also use addEventListener with a function to apply the backgroundColor
where you click, getting the value from the colorPicker.
*/
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

//Used the addEventListener and called the function makeGrid().
document.getElementById("sizePicker").addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});

/*
added a button to clear the grid. It is the same as the "submit" button, but
it is clearer way for the user
*/
$("#clearButton").click(function(){
    makeGrid();
  });
