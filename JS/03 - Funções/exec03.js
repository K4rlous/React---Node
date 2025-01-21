// Conceito de This

// Contexto Global: No contexto global, this refere-se ao objeto global, que é window no navegador ou global no Node.js.
console.log(this); // No navegador, isso imprime o objeto window

// Em Métodos de Objetos: Quando this é usado em um método de um objeto, ele se refere ao próprio objeto
const pessoa = {
    nome: 'Alice',
    saudar: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  
  pessoa.saudar(); // Output: Olá, meu nome é Alice
// Neste exemplo, this dentro do método saudar refere-se ao objeto pessoa.


// Em Funções: O valor de this em uma função normal depende de como a função é chamada.
// Funções Simples:
function mostreisso() {
    console.log(this);
  }
  
  mostreisso(); // No modo estrito, undefined; caso contrário, objeto global
  
// Função Dentro de um Objeto:
const obj = {
    metodo: function() {
      console.log(this);
    }
  };
  
  obj.metodo(); // Output: o próprio objeto obj
  

// Em Funções Arrow: Arrow functions não têm seu próprio valor de this. Em vez disso, elas herdam o this do contexto circundante no qual foram definidas.
const arrowFunction = () => {
    console.log(this);
  };
  
  arrowFunction(); // No contexto global, herda o objeto global

// Dentro de métodos de objeto, as arrow functions herdam o this do escopo circundante:
const pessoa2 = {
    nome: 'Alice',
    saudar2: function() {
      const innerArrowFunction = () => {
        console.log(`Olá, meu nome é ${this.nome}`);
      };
      innerArrowFunction();
    }
  };
  
  pessoa2.saudar2(); // Output: Olá, meu nome é Alice
// Neste exemplo, this dentro da arrow function refere-se ao objeto pessoa2 porque herdou o this do método saudar2.


// Em Eventos: Quando usado em manipuladores de eventos, this refere-se ao elemento HTML que disparou o evento.
const botao = document.querySelector('botao');
botao.addEventListener('click', function() {
  console.log(this); // Refere-se ao botão que foi clicado
});
