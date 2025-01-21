// Funções de Primeira CLasse e Expressões de Função

// Quando dizemos que funções são "de primeira classe" em JavaScript, queremos dizer que elas são tratadas como qualquer outra variável. Isso significa que você pode:

// Atribuir uma função a uma variável:
const saudar = function(nome) {
    return `Olá, ${nome}!`;
  };

// Passar uma função como argumento para outra função:
function executarfuncao(func, valor) {
    return func(valor);
  }
  
  const result = executarfuncao(saudar, 'Alice');
  console.log(result); // Output: Olá, Alice!


//  Retornar uma função de outra função:
function criarsaudacao(saudacao) {
    return function(nome) {
      return `${saudacao}, ${nome}!`;
    };
  }
  
  const dizeroi = criarsaudacao('Oi');
  console.log(dizeroi('Bob')); // Output: Oi, Bob!


// Expressões de Função: Expressões de função são um tipo de declaração de função onde a função é definida como parte de uma expressão maior. Isso é diferente das declarações de função, que são definidas com a palavra-chave function no início.

const fatorial = function fat(n) {
    return n <= 1 ? 1 : n * fat(n - 1);
  };
  
  console.log(fatorial(5)); // Output: 120
// Nesta expressão de função nomeada, a função fact é utilizada internamente para a recursão.


// Expressão de Função Anônima:
const quadrado = function(n) {
    return n * n;
  };
  
  console.log(quadrado(4)); // Output: 16

// Nesta expressão de função anônima, a função não tem um nome próprio e é atribuída diretamente a uma variável.  
/*
Diferença Entre Declaração e Expressão de Função: A principal diferença é onde e como a função é definida

Declaração de Função: Pode ser chamada antes de sua definição no código, devido ao hoisting (elevação)
console.log(soma(2, 3)); // Output: 5
function soma(a, b) {
  return a + b;
}


Expressão de Função: Não pode ser chamada antes de sua definição no código.
// console.log(soma(2, 3)); // Uncaught ReferenceError: Cannot access 'soma' before initialization <= ERRO CAUSADO!
const soma = function(a, b) {
  return a + b;
};
console.log(soma(2, 3)); // Output: 5
 */