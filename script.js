function criarLista() {
  const lista = document.querySelector('#lista-tarefas');
  const adicionarItem = document.createElement('li');
  lista.innerText = input.value;
  adicionarItem.classname = 'item';
  lista.appendChild(adicionarItem);
}
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarLista);