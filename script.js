const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const removerSelecionado = document.getElementById('remover-selecionado');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const itemsLista = listaTarefas.children;
const nomeItem = document.createElement('li');
const qntItems = 0;
let tamanhoLista = listaTarefas.children.length;

criarTarefa.addEventListener('click', () => {
  if (textoTarefa.value !== '') {
    nomeItem.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(nomeItem);
    textoTarefa.value = '';
    tamanhoLista += 1;
  }
});

listaTarefas.addEventListener('click', (event) => {
  for (let i = 0; i < tamanhoLista; i += 1) {
    itemsLista[i].style.backgroundColor = '';
    if (itemsLista[i] === event.target) {
      itemsLista[i].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
});

listaTarefas.addEventListener('dblclick', (event) => {
  for (let i = 0; i <= tamanhoLista; i += 1) {
    if (itemsLista[i] === event.target) {
      if (itemsLista[i].classList[0] === undefined) {
        itemsLista[i].classList.add('completed');
      } else {
        itemsLista[i].classList.remove('completed');
      }
    }
  }
});

apagaTudo.addEventListener('click', () => {
  while (qntItems < listaTarefas.children.length) {
    listaTarefas.removeChild(listaTarefas.childNodes[0]);
  }
});

removerSelecionado.addEventListener('click', (event) => {
  // console.log(event.target)
  // console.log(lista.children)
});

moverCima.addEventListener('click', (event) => {
  // console.log(event.target)
  // console.log(lista.children)
});

moverBaixo.addEventListener('click', (event) => {
  // console.log(event.target)
  // console.log(lista.children)
});

removerFinalizados.addEventListener('click', (event) => {
});

salvarTarefas.addEventListener('click', (event) => {
});
