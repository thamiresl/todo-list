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
 

/* //Requisito 5 e 6
let btnAdicionar = document.querySelector("#criar-tarefa");
let btnSalvar = document.querySelector("#salvar-tarefas");
let btnApagarTudo = document.querySelector("#apaga-tudo");
let btnRemoverFinalizados = document.querySelector("#remover-finalizados");
let btnRemoverSelecionadas = document.querySelector("#remover-selecionado");
let input = document.querySelector('#texto-tarefa'); 
let ol = document.querySelector("#lista-tarefas");
let btnSobe = document.querySelector("#mover-cima");
let btnDece = document.querySelector("#mover-baixo");

function criarTarefa() {
  let newLi = document.createElement('li');                            
  ol.appendChild(newLi);
  newLi.innerText = input.value;
  newLi.className = "itens"
  input.value = '';  
}

btnAdicionar.addEventListener("click", criarTarefa);

//Requisito 7
function setGray(event) {
  clearClassesName()
  if(event.target.classList.contains("selected")){
    event.target.classList.remove("selected") 
  }
  else{
    event.target.classList.add('selected') 
  }
}

let lis = document.querySelector("#lista-tarefas");
lis.addEventListener("click", setGray); */