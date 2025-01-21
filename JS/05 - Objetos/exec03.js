// Protótipos

// JavaScript usa um modelo de herança baseado em protótipos. Isso significa que objetos podem herdar propriedades e métodos de outros objetos. Em JavaScript, cada objeto tem uma propriedade interna chamada [[Prototype]], que pode ser usada para compartilhar propriedades e métodos entre objetos

// Quando você cria um objeto a partir de uma função construtora, as propriedades e métodos definidos na propriedade prototype dessa função construtora são compartilhados por todas as instâncias criadas.

// Função Construtora e Propriedade prototype:
function pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  pessoa.prototype.saudar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
  
  const alice = new pessoa('Alice', 30);
  const bob = new pessoa('Bob', 25);
  
  alice.saudar(); // Output: Olá, meu nome é Alice
  bob.saudar(); // Output: Olá, meu nome é Bob
// Neste exemplo, pessoa é uma função construtora e saudar é um método definido no protótipo de pessoa. Isso significa que todas as instâncias de pessoa compartilharão o mesmo método saudar


// Cadeia de Protótipos: Quando você tenta acessar uma propriedade ou método em um objeto e ele não existe naquele objeto, JavaScript procurará essa propriedade ou método na cadeia de protótipos.
const animal = {
    falar: function() {
      console.log('O animal falou.');
    }
  };
  
  const cao = Object.create(animal);
  cao.latir = function() {
    console.log('Woof!');
  };
  
  cao.latir(); // Output: Woof!
  cao.falar(); // Output: O animal falou.
// Neste exemplo, cao herda o método falar de animal através da herança prototípica


// Propriedade __proto__: Você também pode acessar o protótipo de um objeto diretamente usando a propriedade __proto__. No entanto, essa abordagem não é recomendada para produção.
console.log(cao.__proto__); // Output: { falar: [Function: falar] }


// Resumo
// Protótipos são usados para compartilhar propriedades e métodos entre objetos.
// Funções Construtoras podem ter um prototype que define métodos compartilhados.
// Cadeia de Protótipos permite que objetos herdem de outros objetos.
// Sintaxe de Classe é uma forma mais moderna e legível de trabalhar com protótipos.