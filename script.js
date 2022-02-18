const caminhoBotao = document.querySelector('#criar-tarefa')
let caminhoInput = document.querySelector('#texto-tarefa')
let listaTarefas = [];
let caminhoLi = document.querySelector('#lista-tarefas')
let todasAsLis = document.getElementsByTagName('li')

function letras(event) {
  listaTarefas.push(caminhoInput.value)
  let novaTarefa = caminhoInput.value;
  document.querySelector('#texto-tarefa').value = ""
  let criandoLi = document.createElement('li')
  criandoLi.innerText = novaTarefa
  caminhoLi.appendChild(criandoLi)

}

caminhoBotao.addEventListener("click", letras)


let test;


function selecionar(event) {
  test = event.target;
  if (test.className === 'selecionado') {
    test.className = ''
  }else{
    test.className = 'selecionado'
  }
  }

caminhoLi.addEventListener('click', selecionar)