
function makeGrid() {

  var color;
  var rows;
  var cols;
  var table = document.getElementById("pixel_canvas");

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

function submition() {
  document.getElementById("sizePicker").addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});
};
submition();

/*
I created the Button to clear the grid. Since when I click on submit it acctually clears the grid,
I made it a function <submition()> so I could call the function inside the function bellow.
However, if I "uncomment" the code bellow the whole thing does not work. Can you help me with that? Thank you.
*/

// $("#clearButton").click(function(){
//   let r = confirm("Are you sure you want to clear?");
//   if (r == true) {
//     submition();
// });
