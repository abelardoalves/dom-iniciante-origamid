// window.alert('Isso mesmo!');

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

///titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

h1Selecionado.addEventListener('click', function(){
  console.log('Clicou em ', h1Selecionado.innerText);
})

// ou
function callback1(){
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click',callback1);

// Exercícios

// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(urlAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const lingNavegador = window.navigator.language;
console.log(lingNavegador);

// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log(windowWidth);

