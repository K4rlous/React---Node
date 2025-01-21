// Arrays e Métodos de Array

// Criando um array: Você pode criar arrays em JavaScript usando colchetes [] ou o construtor Array.
const array1 = [1, 2, 3, 4, 5]; // Array com números
const array2 = ['a', 'b', 'c']; // Array com strings
const array3 = new Array(1, 2, 3); // Usando o construtor Array


// Acessando Itens do Array: Os itens do array podem ser acessados usando seus índices, começando do 0.
console.log(array1[0]); // Output: 1
console.log(array2[2]); // Output: 'c'


// Métodos de Array

// Push E Pop: push adiciona um ou mais elementos ao final do array e pop remove o último elemento do array.
const arr = [1, 2, 3];
arr.push(4); // Adiciona 4 ao final
console.log(arr); // Output: [1, 2, 3, 4]

arr.pop(); // Remove o último elemento
console.log(arr); // Output: [1, 2, 3]


// Shift e Unshift: remove o primeiro elemento do array e unshift adiciona um ou mais elementos ao início do array.
const arr2 = [1, 2, 3];
arr2.unshift(0); // Adiciona 0 ao início
console.log(arr2); // Output: [0, 1, 2, 3]

arr2.shift(); // Remove o primeiro elemento
console.log(arr2); // Output: [1, 2, 3]


// ForEach: Executa uma função para cada elemento do array.
const arr3 = [1, 2, 3];
arr3.forEach(function(item) {
  console.log(item); // Output: 1, 2, 3
});


// Map: Cria um novo array com os resultados da aplicação de uma função em cada elemento do array original.
const arr4 = [1, 2, 3];
const raizquadrada = arr.map(function(item) {
  return item * item;
});
console.log(raizquadrada); // Output: [1, 4, 9]


// Filter: Cria um novo array com todos os elementos que passaram em um teste implementado por uma função.
const arr5 = [1, 2, 3, 4];
const pares = arr5.filter(function(item) {
  return item % 2 === 0;
});
console.log(pares); // Output: [2, 4]


// Reduce: Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
const arr6 = [1, 2, 3, 4];
const soma = arr6.reduce(function(accumulator, item) {
  return accumulator + item;
}, 0);
console.log(soma); // Output: 10


// Find: Retorna o primeiro elemento que satisfaz a função de teste fornecida.
const arr7 = [1, 2, 3, 4];
const achar = arr7.find(function(item) {
  return item > 2;
});
console.log(achar); // Output: 3 


// Includes: Verifica se um array contém um elemento especificado.
const arr8 = [1, 2, 3];
console.log(arr8.includes(2)); // Output: true
console.log(arr8.includes(4)); // Output: false

