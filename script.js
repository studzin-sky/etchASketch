const container = document.getElementById('container');
const erase = document.getElementById('erase');
const range = document.getElementById('range');
const userGrid = document.getElementsByClassName('grid-element');

document.addEventListener('load', setDefaultGrid(16));

// set a default 16 x 16 grid
function setDefaultGrid(x) {
  setGridSize(x);
  fillGrid(x);
}

//create a function to create the grid columns
function setGridSize(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


// create a function for the grid 
function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      gridElement.addEventListener('mouseover', generateRandomColor);
      container.appendChild(gridElement);
    }
  }

// create a function that generates random color and changes the background of the object calling the function
function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
}


// Issue 3 create an event listener to reset colors on a click
erase.addEventListener('click', function() {
  for (let i=0; i < userGrid.length; i++) {
    userGrid[i].style.backgroundColor = 'inherit';
  }
});

//Issue 4 create a button to change the size of the grid 
range.addEventListener('click', function(){
  let gridArray = Array.from(container.childNodes);
  for (let i=0; i < gridArray.length; i++) {
    gridArray[i].remove();
  };
  let number = window.prompt('Choose a number between 2 - 64', '16');
  
  if (number !== null) {
    number = parseInt(number);
    if (number < 2 || number > 64 || Number.isNaN(number)) {
      alert('Enter a correct number! ///lo@d1ng d3f@ult...');
      setDefaultGrid(16);
    } else {
      setDefaultGrid(number);
    }
  }

});

