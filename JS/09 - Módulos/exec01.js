// import e export Para Modularizar o Código

// Export: A palavra-chave export é usada para exportar funções, objetos, ou valores primitivos de um módulo para que possam ser usados em outros módulos.

// Exportação Nomeada:
//  arquivo.js
export const meuValor = 42;
export function minhaFuncao() {
    console.log("Olá, mundo!");
}

// Exportação Padrão:
//  arquivo.js
export default function() {
    console.log("Esta é uma exportação padrão.");
}


// Import: A palavra-chave import é usada para importar funções, objetos ou valores de outros módulos.
// Importação Nomeada:
//  principal.js
import { meuValor, minhaFuncao } from './arquivo.js';

console.log(meuValor); // 42
minhaFuncao(); // "Olá, mundo!"

// Importação Padrão:
//  principal.js
import minhaFuncaoPadrao from './arquivo.js';

minhaFuncaoPadrao(); // "Esta é uma exportação padrão."


// Renomeação durante a Importação: Você pode renomear importações para evitar conflitos de nome:
//  principal.js
import { minhaFuncao as funcaoRenomeada } from './arquivo.js';

funcaoRenomeada(); // "Olá, mundo!"

// Exemplo usando Biblioteca
// math.js
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const pi = 3.14159;

// main.js
import { add, multiply, pi } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(pi); // 3.14159

