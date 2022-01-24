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
  const itemLista = lista.children;
  for (let index = 0; index < itemLista; index += 1) {
    itemLista[index].getElementsByClassName.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
lista.addEventListener('click', mudarCor);