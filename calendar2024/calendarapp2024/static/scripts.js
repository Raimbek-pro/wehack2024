// JavaScript
window.onload = function() {
    const grid = document.querySelector('.grid');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const hours = Array.from({length: 15}, (_, i) => i + 8); // generates hours from 8 to 22
  
    // Create the first row with days of the week
    grid.appendChild(document.createElement('div')); // empty cell in the corner
    for (let day of days) {
      let cell = document.createElement('div');
      cell.textContent = day;
      cell.className = 'cell';
      grid.appendChild(cell);
    }
  
    // Create the rest of the grid
    for (let hour of hours) {
      let timeCell = document.createElement('div');
      timeCell.textContent = hour + ':00';
      timeCell.className = 'cell';
      grid.appendChild(timeCell);
  
      for (let i = 0; i < 5; i++) { // 5 days in a week
        let cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
      }
    }
  }
let dragged;

document.addEventListener("drag", function(event) {}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "cell") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "cell") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "cell") {
    event.target.style.background = "";
    if (event.target.childNodes.length == 0) { // Only allow drop if cell is empty
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }
  
}, false);
