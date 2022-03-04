const lista = document.getElementById('lista-tarefas');

// Carregar Lista Salva se houver //
const listaSalva = localStorage.getItem('lista');
if (listaSalva) {
  lista.innerHTML = listaSalva;
}
// Adicioando Nova Tarefa //
const tarefa = document.getElementById('texto-tarefa');
const bortaoAddTarefa = document.getElementById('criar-tarefa');
function novaTarefa() {
  const criaTarefa = document.createElement('li');
  criaTarefa.innerText = tarefa.value;
  lista.appendChild(criaTarefa);
  tarefa.value = '';
}
bortaoAddTarefa.addEventListener('click', novaTarefa);

// Remover e inserir cor de fundo da Tarefa //
function removerCor() {
  if (document.querySelector('li[style]') !== null) {
    document.querySelector('li[style]').removeAttribute('style');
  }
}

function inserirCor(event) {
  removerCor();
  const clickNaTarefa = event.target;
  clickNaTarefa.style.backgroundColor = 'rgb(128, 128, 128)';
  clickNaTarefa.style.color = 'rgba(6, 90, 96, 1)'; // depois verificar outra cor mais legal //
}
lista.addEventListener('click', inserirCor);

// Requisito 9 - line-through. Remove e adiciona a classe Completed em duplo click //

function linhaRiscada(event) {
  const elemLinha = event.target;
  if (elemLinha.className === 'completed') {
    elemLinha.removeAttribute('class');
  } else {
    elemLinha.className = 'completed';
  }
}
lista.addEventListener('dblclick', linhaRiscada);

// Requisito 10 - Exclir Lista //
const deletLista = document.getElementById('apaga-tudo');
function delLista() {
  lista.innerHTML = '';
}
deletLista.addEventListener('click', delLista);

// Remover Elementos da Lista Finalizados - Requsito 11//
const removerRiscado = document.querySelector('#remover-finalizados');
function removerFinalizado() {
  const itemFinalizado = document.getElementsByTagName('li');
  for (let i = itemFinalizado.length - 1; i >= 0; i -= 1) {
    if (itemFinalizado[i].classList.contains('completed')) {
      itemFinalizado[i].remove();
    }
  }
}
removerRiscado.addEventListener('click', removerFinalizado);

// Remover Selecionado //
const removerSelecionado = document.querySelector('#remover-selecionado');
function removeSelcionado() {
  const selecionado = document.querySelector('li[style]');
  selecionado.remove();
}
removerSelecionado.addEventListener('click', removeSelcionado);

// Salvar Lista - Requisito 12 //
const salvaLista = document.querySelector('#salvar-tarefas');
function salvarLista() {
  localStorage.clear();
  localStorage.setItem('lista', lista.innerHTML);
}
salvaLista.addEventListener('click', salvarLista);

// Mover para Cima a Tarefa //
const moverUPTarefa = document.getElementById('mover-cima');
function moverUp() {
  const upTarefa = document.querySelector('li[style]');
  if (upTarefa !== null) {
    const anteriorTarefa = upTarefa.previousSibling;
    if (anteriorTarefa !== null) {
      lista.insertBefore(upTarefa, anteriorTarefa);
    }
  }
}
moverUPTarefa.addEventListener('click', moverUp);

// Mover para Baixo a Tarefa //
const moverDownTarefa = document.getElementById('mover-baixo');
function moverDown() {
  const downTarefa = document.querySelector('li[style]');
  if (downTarefa !== null) {
    const seguinteTarefa = downTarefa.nextSibling;
    if (seguinteTarefa !== null) {
      lista.insertBefore(seguinteTarefa, downTarefa);
    }
  }
}
moverDownTarefa.addEventListener('click', moverDown);
