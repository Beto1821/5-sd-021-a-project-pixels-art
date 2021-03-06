const paletaCores = document.getElementById('color-palette');
const pixelBox = document.getElementById('pixel-board');

function criaMatriz(n) {
  pixelBox.innerHTML = '';
  for (let z = 1; z <= n; z += 1) {
    let row = document.createElement('div');
    row.className = 'linha';
    for (let i = 1; i <= n; i += 1) {
      let box = document.createElement('div');
      box.className = 'pixel';
      box.addEventListener('click', pixelColor);
      row.appendChild(box);
    }
    pixelBox.appendChild(row);
  }
}
criaMatriz(5);

function randomColors() {
  const color = ['rgb(0, 0, 0)'];
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    color.push(`rgb(${r}, ${g}, ${b})`);
  }
  for (let z = 0; z < colors.length; z += 1) {
    colors[z].style.backgroundColor = color[z];
  }
}

randomColors();

function seleciona(event) {
  const eraSelecionada = document.querySelector('.selected');
  eraSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(getComputedStyle(event.target).backgroundColor);
}
paletaCores.addEventListener('click', seleciona);

function pixelColor(event) {

  const paleta = document.querySelector('.selected');
  const color = getComputedStyle(paleta).backgroundColor;
  event.target.style.backgroundColor = color;
  console.log(event.target);
  console.log(color);
}

let btn = document.querySelector('#clear-board');

btn.addEventListener('click', function () {
  location.reload();
});

const input = document.getElementById('board-size');

function tamanhoQuadro() {
  if (!input.value) {
    window.alert('Board inválido!');
  } else if (input.value > 50) {
    input.value = 50;
  } else if (input.value < 5 && input.value > 0) {
    input.value = 5;
  }
  criaMatriz(input.value);
}
const btn1 = document.getElementById('generate-board');
btn1.addEventListener('click', tamanhoQuadro);
