// JavaScript
window.onload = function() {
    const grid = document.querySelector('.grid');
    const days_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const days_RU = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
    const days_KZ = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма'];

    let days;
    if (window.location.href.includes('RU')) {
        days = days_RU;
    } else if (window.location.href.includes('KZ')) {
        days = days_KZ;
    } else {
        days = days_EN;
    }

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
    // Get the #courses div
    const courses = document.querySelector('#courses');

    // Allow dragged items to be moved over the #courses div
    courses.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    // Handle dropping a dragged item on the #courses div
    courses.addEventListener('drop', function(event) {
        event.preventDefault();
        if (event.target.className === 'course') {
            event.target.parentNode.appendChild(dragged);
        } else {
            event.target.appendChild(dragged);
        }
    });
  }

document.getElementById('language-select').addEventListener('change', function() {
  const language = this.value;
  if (language === 'ru') {
      window.location.href = '../RU/main.html'; // Replace with the URL of the Russian version
  } else if (language === 'kz') {
      window.location.href = '../KZ/main.html'; // Replace with the URL of the Kazakh version
  } else {
      window.location.href = '../EN/main.html'; // Replace with the URL of the English version
  }
});

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
  if (event.target.className == "cell" && event.target.childNodes.length == 0) {
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
