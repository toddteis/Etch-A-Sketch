const displayScreen = document.querySelector('.display-screen');

setupGrid(100);

function setupGrid(squares) {
   const gridSize = squares * squares;
   const divSize = 500 / squares;
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
