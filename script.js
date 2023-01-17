const board = document.querySelector('#pixel-board');
const colors = document.getElementsByClassName('color');
const btn = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
const inputSize = document.getElementById('board-size');
const btnGenerate = document.getElementById('generate-board');

function paintPalette(event) {
  const clean = event.target;
  clean.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function createRows(lines) {
  const div = document.createElement('div');
  div.className = 'row';
  for (let index = 0; index < lines; index += 1) {
    const line = document.createElement('div');
    line.classList.add('pixel');
    line.classList.add('white');
    line.addEventListener('click', paintPalette);
    div.appendChild(line);
  }
  board.appendChild(div);
}

function createBoard(pixels) {
  board.innerHTML = '';

  for (let index = 0; index < pixels; index += 1) {
    createRows(pixels);
  }
}

function selectedColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function () {
      const select = document.querySelector('.selected');
      select.classList.remove('selected');
      colors[index].classList.add('selected');
    });
  }
}

selectedColor();

function resetColor() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', resetColor);

function randomColors() {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('black')) {
      colors[index].style.backgroundColor = 'black';
    } else {
      const rdmColors = `${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`;
      colors[index].style.backgroundColor = `rgb(${rdmColors})`;
    }
  }
}

function pixelsNumbers(n) {
  let pixels = n;
  if (pixels === '') {
    alert('Board inválido!');
  }
  if (pixels < 5) {
    pixels = 5;
  }
  if (pixels > 50) {
    pixels = 50;
  }
  createBoard(pixels);
}

function sizeBoard() {
  pixelsNumbers(inputSize.value);
}

btnGenerate.addEventListener('click', sizeBoard);

window.onload = function onload() {
  randomColors();
  pixelsNumbers(5);
};
