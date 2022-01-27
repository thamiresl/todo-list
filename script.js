const lista = document.querySelector('#lista-tarefas');
const texto = document.querySelector('#texto-tarefa');

function criarLista() {
  const adicionarItem = document.createElement('li');
  adicionarItem.innerText = texto.value;
  adicionarItem.className = 'itens';
  lista.appendChild(adicionarItem);
  texto.value = '';
}
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarLista);

function mudarCor(event) {
  let itemLista = lista.children;
  for (let index = 0; index < itemLista; index += 1) {
    itemLista[index].getElementsByClassName.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
lista.addEventListener('click', mudarCor);

function tarefaCompleta(event) {
  if (event.target.style.textDecoration === '') {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    event.target.style.textDecoration = '';
    event.target.className = '';
  }
} 
const adicionarItem = document.createElement('li');
adicionarItem.addEventListener('dblClick', tarefaCompleta);

function removerTudo() {
  lista.innerHTML = '';
}
const botaoRemoverTudo = document.querySelector('#apaga-tudo');
botaoRemoverTudo.addEventListener('click', removerTudo);

// Referencias
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event 
// https://stackoverflow.com/questions/21976227/classlist-add-does-not-work 