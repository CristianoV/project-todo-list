const caminhoBotao = document.querySelector('#criar-tarefa')
const caminhoInput = document.querySelector('#texto-tarefa')
let listaTarefas = [];
const caminhoLi = document.querySelector('#lista-tarefas')
const todasAsLis = document.getElementsByTagName('li')
const caminhoBotaoLimpar = document.getElementById('apaga-tudo')
const caminhoBotaoLimparFinalizados = document.getElementById('remover-finalizados')

function letras(event) {
  listaTarefas.push(caminhoInput.value)
  let novaTarefa = caminhoInput.value;
  document.querySelector('#texto-tarefa').value = ""
  let criandoLi = document.createElement('li')
  criandoLi.innerText = novaTarefa
  caminhoLi.appendChild(criandoLi)

}

caminhoBotao.addEventListener("click", letras)

let tentando = document.getElementsByClassName('selecionado')

let test;


function apagando() {
  for (let index = 0; index < tentando.length; index++) {
    tentando[index].className = ''
  }
}

function selecionar(event) {
  test = event.target;

  if (test.className === '') {
    apagando();
    test.className = 'selecionado';

  }
  // else{
  //   test.className = ''
  // }
}
let riscado;
function completar(event) {
  riscado = event.target
  if (riscado.className === 'selecionado') {
    riscado.className = 'completed'
  }else{
    riscado.className = ''
  }
}

function limpaTudo() {
  for (let index = 0; index = todasAsLis.length; index++) {
    caminhoLi.removeChild(todasAsLis[0])
  }
}

function limpaFinalizados() {
  let finalizados = document.getElementsByClassName('completed')
  for (let index = 0; index = finalizados.length; index++) {
    caminhoLi.removeChild(finalizados[0])
  }
}


caminhoLi.addEventListener('dblclick', completar)
caminhoLi.addEventListener('click', selecionar)
caminhoBotaoLimparFinalizados.addEventListener('click', limpaFinalizados)
caminhoBotaoLimpar.addEventListener('click', limpaTudo)