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
  // else if (test.className === '' || tentando[0].className === 'selecionado') {
  //   tentando[0].className = ''
  //   test.className = 'selecionado';
  // }
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


caminhoLi.addEventListener('dblclick', completar)
caminhoLi.addEventListener('click', selecionar)