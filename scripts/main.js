const displayScreen = document.querySelector('.display-screen');

setupGrid(16);

function setupGrid(squares) {
 for (let index = 0; index < squares; index++) {
    const div = document.createElement('div');
    div.classList.add('square');
    displayScreen.appendChild(div);
 }
}