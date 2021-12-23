const displayScreen = document.querySelector('.display-screen');
const reset = document.querySelector('.reset')
let gridSlider = document.querySelector('.grid-slider');
let gridSizeDisplay = document.querySelector('.Grid-Size-Display');
let currentGridSize = 50;
setupGrid(currentGridSize);

gridSlider.oninput = function() {
   gridSizeDisplay.textContent = this.value;
   currentGridSize = this.value;
}

function setupGrid(squares) {
   let gridSize = squares * squares;
   let divSize = 500 / squares;
   for (let index = 0; index < gridSize; index++) {
      const div = document.createElement('div');
      div.classList.add('grid');
      displayScreen.style.gridTemplateColumns = `repeat(${squares}, ${divSize}px)`;
      displayScreen.style.gridTemplateRows = `repeat(${squares}, ${divSize}px)`;
      displayScreen.appendChild(div);

      let className = `grid${index}`;
      div.classList.add(`${className}`)
      let divNumber = document.querySelector(`.${className}`);
      divNumber.addEventListener('mouseover', () => {
         div.classList.add('black');
      })
   }
}

reset.addEventListener('click', () => {
   while (displayScreen.firstChild) {
      displayScreen.removeChild(displayScreen.firstChild);

   }
   displayScreen.classList.remove('grid');
   displayScreen.style.gridTemplateColumns = ``;
   displayScreen.style.gridTemplateRows = ``;
   setupGrid(currentGridSize);
})


