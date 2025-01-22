// Hoisting de Variáveis e Funções

/*
Hoisting é um comportamento do JavaScript em que declarações de variáveis e funções são movidas para o topo do seu escopo antes da execução do código. Isso significa que você pode usar variáveis e funções antes mesmo de declará-las.
*/


// Hoisting de Variáveis: Com variáveis declaradas usando var, o hoisting move a declaração para o topo do escopo da função, mas não a inicialização.
console.log(a); // undefined
var a = 5;
console.log(a); // 5

/*
No exemplo acima, a declaração var a é içada para o topo do escopo, mas a inicialização (a = 5) não é. Portanto, console.log(a) antes da inicialização resulta em undefined.
No entanto, variáveis declaradas com let e const também são içadas, mas não são inicializadas. Usá-las antes da declaração resulta em um erro ReferenceError:
*/
console.log(b); // ReferenceError: b is not defined
let b = 10;
console.log(b); // 10

console.log(c); // ReferenceError: c is not defined
const c = 15;
console.log(c); // 15


// Hoisting de Funções: Declarações de funções são completamente içadas, o que significa que você pode chamar uma função antes de declará-la no código:
saudar(); // "Olá, Mundo!"
function saudar() {
    console.log("Olá, Mundo!");
}
// Neste caso, a função saudar é içada para o topo do escopo, permitindo que seja chamada antes de ser declarada.


// Expressões de Funções: Expressões de funções, no entanto, não são içadas da mesma maneira que declarações de funções. Veja o exemplo
saudar(); // TypeError: saudar is not a function
var saudar = function() {
    console.log("Olá, Mundo!");
}
// Aqui, a variável saudar é içada, mas como uma variável sem valor (undefined). Portanto, quando você tenta chamar saudar antes da linha que define a função, resulta em um erro TypeError.


