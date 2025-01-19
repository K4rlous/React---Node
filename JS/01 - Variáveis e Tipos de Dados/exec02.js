// Tipos de Dados

// String: Representa texto. Pode ser delimitado por aspas simples (' '), aspas duplas (" "), ou crases (`) para template literals.
let saudação01 = 'Olá!'
let saudação02 = "Tudo bem?"
let saudação03 = `Como vai?`


// Number: Representa números, tanto inteiros quanto de ponto flutuante.
let idade = 25
let pi = 3.14


// Boolean: Representa um valor lógico que pode ser verdadeiro (true) ou falso (false).
let ativo = true
let finalizado = false


// Null: Representa a ausência intencional de qualquer valor. É um valor atribuído manualmente.
let valornulo = null


// Undefined: Representa uma variável que foi declarada mas ainda não foi atribuída a um valor.
let valorindefinido
console.log(valorindefinido) // Retorno: undefined


// Symbol: Introduzido no ECMAScript 6 (ES6), symbol é um tipo de dado primitivo exclusivo e imutável, usado principalmente como identificadores únicos para propriedades de objetos.
let idunico = Symbol('id')