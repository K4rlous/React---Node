// Declaração e Manipulação de Objetos

// Declarando objeto: Você pode declarar objetos usando chaves {} e especificando pares de chave-valor.
const pessoa = {
    nome: 'Alice',
    idade: 30,
    saudar: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
// Neste exemplo, pessoa é um objeto com três propriedades: nome, idade e saudar. A propriedade saudar é uma função (ou método).

// Acessando Propriedades do Objeto: Você pode acessar as propriedades de um objeto usando a notação de ponto (.) ou a notação de colchetes ([]).

// Notação de Ponto (.)
console.log(pessoa.nome); // Output: Alice
console.log(pessoa.idade); // Output: 30
pessoa.saudar(); // Output: Olá, meu nome é Alice

// Notação de Colchetes:
console.log(pessoa['nome']); // Output: Alice
console.log(pessoa['idade']); // Output: 30
// A notação de colchetes é útil quando o nome da propriedade é armazenado em uma variável ou contém caracteres especiais


// Modificando Propriedades: Você pode modificar as propriedades de um objeto atribuindo um novo valor a uma propriedade existente ou adicionando uma nova propriedade.
pessoa.nome = 'Bob'; // Modifica a propriedade 'nome'
pessoa.cidade = 'Nova York'; // Adiciona uma nova propriedade 'cidade'

console.log(pessoa.nome); // Output: Bob
console.log(pessoa.cidade); // Output: Nova York


// Removendo Propriedades: Você pode remover propriedades de um objeto usando o operador delete.
delete pessoa.idade; // Remove a propriedade 'idade'
console.log(pessoa.idade); // Output: undefined (ou não definido!)


// Iterando Sobre Propriedades do Objeto: Você pode iterar sobre as propriedades de um objeto usando o loop for...in.
for (const indice in pessoa) {
    console.log(`${indice}: ${pessoa[indice]}`);
  }
// Este loop imprimirá todas os indices e valores do objeto pessoa, note que o método sairá também como resultado!



