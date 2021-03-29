/*
My plan: 
Issue 1. Create default 16 x 16 grid of divs using java script inside of the container const
    - code it in js
    - write a css declaration for those divs, (grid? flexbox?)
Issue 2. Set up a hover effect to change color on the divs when you hover a mouse over it
Issue 3. Add a button to reset the grid 
Issue 4. add a button to ask the user if he wants a different layout and then when he choses the number it is created over the default grid
Issue 5. github
*/

const container = document.querySelector('#container');


window.addEventListener('load', setDefaultGrid);

// set a default 16 x 16 grid
function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }


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
