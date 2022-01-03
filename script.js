let tarefa = document.getElementById("texto-tarefa");
let criarTarefa = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let itens = document.getElementsByTagName("li");

function tarefaLista(){
    return tarefa.value.lenght;
}

function criarElemento(){
    let li = document.createElement("li");

    li.appendChild(document.createElement(input.value));
    ol.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let botao = document.createElement("button");
    botao.appendChild(document.createTextNode("x"));
    li.appendChild(botao);
    botao.addEventListener("click", deleteListItem);

    function deletarItem (){
        li.classlist.add("delete");
    }
}

criarTarefa.addEventListener("click", addlistAfterClick);

function addlistAfterClick (){
    if (tarefaLista() > 0){
       criarElemento(); 
    }
}