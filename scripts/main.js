const displayScreen = document.querySelector('.display-screen');

setupGrid(16);

function setupGrid(squares) {
   const gridSize = squares * squares;
   const divSize = 500 / squares;
   for (let index = 0; index < gridSize; index++) {
      const div = document.createElement('div');
      div.classList.add('grid');
      displayScreen.style.gridTemplateColumns = `repeat(${squares}, ${divSize})`;
      displayScreen.style.gridTemplateRows = `repeat(${squares}, ${divSize})`;
      displayScreen.appendChild(div);
   }
}
