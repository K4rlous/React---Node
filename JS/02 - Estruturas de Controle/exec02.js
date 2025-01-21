// Estruturas de Controle Loops

// For: O loop for é usado para iterar sobre um bloco de código um número específico de vezes. É especialmente útil quando você sabe quantas vezes deseja executar um bloco de código.
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  
// While: O loop while executa um bloco de código enquanto uma condição especificada for verdadeira.  
let a = 0;
while (a < 5) {
  console.log(a);
  a++;
}


// For Of: O loop for...of itera sobre objetos iteráveis (como arrays, strings, mapas, etc.), executando um bloco de código para cada valor de uma lista.
const arr = [10, 20, 30, 40];
for (const value of arr) {
  console.log(value);
}


// For In: O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. É ideal para trabalhar com objetos.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

