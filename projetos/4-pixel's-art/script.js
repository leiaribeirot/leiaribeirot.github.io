// Acesso a ID de cada Cor - gera um novo RGB e já atribui o novo RGB a atualização da página.
const onBlack = document.getElementById('black-color');
const onRed = document.getElementById('red-color');
const onBlue = document.getElementById('blue-color');
const onGreen = document.getElementById('green-color');

function newRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById('black-color').style.backgroundColor = 'black';
document.getElementById('red-color').style.backgroundColor = newRGB();
document.getElementById('blue-color').style.backgroundColor = newRGB();
document.getElementById('green-color').style.backgroundColor = newRGB();

// Selcionar e remover cor na Palleta ao clicar

function selectClass(event) {
  const onClasSelected = document.querySelector('.selected');
  onClasSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

onBlack.addEventListener('click', selectClass);
onRed.addEventListener('click', selectClass);
onBlue.addEventListener('click', selectClass);
onGreen.addEventListener('click', selectClass);

// Pegar a cor da Palleta
function selectColor(event) {
  const newBackGroundColor = document.querySelector('.selected');
  const road = event.target;
  const select = newBackGroundColor.style.backgroundColor;
  road.style.backgroundColor = select;
}
// Cria Quadro 5 * 5  Fixo //
const onPixel = document.getElementById('pixel-board'); // ok aqui
function squadStart() {
  for (let i = 0; i < 5; i += 1) {
    const createSpread = document.createElement('section');
    createSpread.classList.add('squad');
    onPixel.appendChild(createSpread);

    for (let y = 0; y < 5; y += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createSpread.appendChild(createPixel);
      createPixel.addEventListener('click', selectColor);
    }
  }
}
squadStart();

function clearPixel() {
  onPixel.innerHTML = '';
}
// Função de Regas do Input - Número de Pixels para o board. //

function rulesInput() {
  const inputRule = document.getElementById('board-size').value;
  let exit = parseInt(inputRule, 10);
  if (inputRule === '') { alert('Board inválido!'); }
  if (exit < 5) { exit = 5; } 
  if (exit > 50) { exit = 50; }
  return exit;
}

function newSquad() {
  const openRule = rulesInput();
  clearPixel();
  for (let i = 0; i < openRule; i += 1) {
    const createSpread = document.createElement('section');
    createSpread.classList.add('squad');
    onPixel.appendChild(createSpread);

    for (let y = 0; y < openRule; y += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      createSpread.appendChild(createPixel);
      createPixel.addEventListener('click', selectColor);
    }
  }
}
const inputVqv = document.querySelector('#generate-board');
inputVqv.addEventListener('click', newSquad);

function clearSquadd() {
  const accessAllSquadd = document.querySelectorAll('.pixel');
  for (let i = 0; i < accessAllSquadd.length; i += 1) {
    accessAllSquadd[i].style.backgroundColor = 'white';
  }
}
const inputClear = document.querySelector('#clear-board');
inputClear.addEventListener('click', clearSquadd);