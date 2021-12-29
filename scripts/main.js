const displayScreen = document.querySelector('.display-screen');
const resetBtn = document.querySelector('.reset')
const colorPicker = document.querySelector('#color-picker');
let gridSlider = document.querySelector('.grid-slider');
let gridSizeDisplay = document.querySelector('.Grid-Size-Display');
let currentGridSize = 2;
let colorMode = 'greys';  // random or greys or clickAndColor
let selectedColor = colorPicker.value;
let mouseOverOrClickMode = 'mouseover'; // click or mouseover
let gridSwitch = 'off'; // on or off

setupGrid(currentGridSize);

colorPicker.addEventListener('input', watchColorPicker, false);
colorPicker.addEventListener('change', watchColorPicker, false);

function colorModeSwitcher(div) {
      if (colorMode =='random') {
            randomMode(div);
         } else if (colorMode =='greys') {
            greyMode(div);
      } else if (colorMode == 'clickAndColor') {
            clickAndColor(div);
         }
}

function colorModeSelector(para) {
   colorMode = para;
}

function displayGrid(para) {
   gridSwitch = para;
   const allGridDivs = displayScreen.childNodes;
   for (let index = 0; index < allGridDivs.length; index++) {
      const element = allGridDivs[index];
      const lowerCaseElement = element.nodeName.toLowerCase();
      if(lowerCaseElement == 'div') {
         element.classList.toggle('show-grid');
      }
   }
}

function watchColorPicker(event) {
   selectedColor = event.target.value;
}

gridSlider.oninput = function () {
   gridSizeDisplay.textContent = this.value;
   currentGridSize = this.value;
   reset();
}

function applyMode(mode) {
   mouseOverOrClickMode = mode;
   reset();
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
      
      divNumber.addEventListener(`${mouseOverOrClickMode}`, () => {
         colorModeSwitcher(divNumber);
      })
   }  
}

resetBtn.addEventListener('click', () => {
   reset();
})

function reset() {
   while (displayScreen.firstChild) {
      displayScreen.removeChild(displayScreen.firstChild);

   }
   displayScreen.classList.remove('grid');
   displayScreen.style.gridTemplateColumns = ``;
   displayScreen.style.gridTemplateRows = ``;
   setupGrid(currentGridSize);
   if(gridSwitch === 'on') {
      displayGrid('on');
   }
}

function greyMode(div) {
   if (div.style.backgroundColor == '') {
      div.style.backgroundColor = 'rgba(0,0,0,0.1)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.1)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.2)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.2)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.3)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.3)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.4)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.4)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.5)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.5)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.6)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.6)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.7)';
   } else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.7)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.8)';
   }  else if (div.style.backgroundColor == 'rgba(0, 0, 0, 0.8)') {
      div.style.backgroundColor = 'rgba(0,0,0,0.9)';
   } else {
      div.style.backgroundColor = 'rgba(0,0,0,1)';
   }
}

function randomMode(div) {
   let totalNumbers = (256 * 256 * 256);
   let randomNumber = Math.random();
   let int = Math.floor(totalNumbers * randomNumber);
   let randomColor = '#' + int.toString(16).padStart(6, '0');
   div.style.backgroundColor = randomColor;
}

function clickAndColor(div) {
   div.style.backgroundColor = selectedColor;
}


