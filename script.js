let lista = document.querySelector('#lista-tarefas');
let texto = document.querySelector('#texto-tarefa');

function criarLista() {
  const adicionarItem = document.createElement('li');
  adicionarItem.innerText = texto.value;
  lista.appendChild(adicionarItem);
  texto.value = '';
}
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', criarLista);

function mudarCor(event) {
  let itemLista = lista.children;
  for (let index = 0; index < itemLista.length; index += 1) {
    document.getElementsByTagName('li')[index].style.backgroundColor = '#fff';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
lista.addEventListener('click', mudarCor);

 function tarefaCompleta(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
  event.target.className = 'completed';
  }
}
lista.addEventListener('dblclick', tarefaCompleta);

function removerTudo() {
  lista.innerHTML = '';
}
const botaoRemoverTudo = document.querySelector('#apaga-tudo');
botaoRemoverTudo.addEventListener('click', removerTudo);

function removerConcluidos() {
  const concluidos = document.querySelectorAll('.completed');
  for (let index = 0; index < concluidos.length; index += 1) {
    concluidos[index].parentElement.removeChild(concluidos[index]);
  }
}
const botaoRemoverConcluidos = document.querySelector('#remover-finalizados');
botaoRemoverConcluidos.addEventListener('click', removerConcluidos);

function salvarLista() {
  localStorage.setItem('listagem', lista.innerHTML);
}
const botaoSalvar = document.querySelector('#salvar-tarefas');
botaoSalvar.addEventListener('click', salvarLista);

function listaSalva() {
  lista.innerHTML = localStorage.getItem('listagem');
}
listaSalva();

// Referencias
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// https://stackoverflow.com/questions/21976227/classlist-add-does-not-work
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
