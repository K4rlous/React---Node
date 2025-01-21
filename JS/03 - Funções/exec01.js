// Declaração de Funções (function, arrow functions =>) 

// Funções Tradicionais: As funções tradicionais são declaradas usando a palavra-chave function. Elas podem ser nomeadas ou anônimas.
function saudacao(nome){
    return `Olá, ${nome}!`
}
console.log(saudacao('Carlos'))


// Funções Anônimas: Aqui, a função é atribuída a uma variável 'saudar' e não possui um nome próprio.
const saudar = function(nome){
    return `Olá, ${nome}!`
}
console.log(saudar('Ana'))


// Arrow Functions: Arrow functions foram introduzidas no ES6 e oferecem uma sintaxe mais curta e conveniente para escrever funções. Elas são sempre anônimas.
const dizeroi = (nome) => {
    return `Oi, ${nome}!`
}
console.log(dizeroi('João'))

// Se a função tem apenas um único parâmetro e uma única expressão, você pode omitir os parênteses ao redor do parâmetro e a palavra return.
const dizeroi2 = nome => `Oi, ${nome}!`
console.log(dizeroi2('Maria'))

/*
this Context: Arrow functions não têm seu próprio contexto de this; elas herdam o this do escopo circundante. Em contrapartida, funções tradicionais têm seu próprio contexto de this.
Sintaxe: Arrow functions oferecem uma sintaxe mais curta e são ideais para funções simples e de uso rápido.
 */