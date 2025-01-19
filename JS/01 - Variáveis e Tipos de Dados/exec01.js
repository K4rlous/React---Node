// Variáveis

// let: É usada para declarar variáveis que podem ter seu valor alterado posteriormente.
let nome = "Maria";
nome = "João";
// Note que mudamos o valor atribuido a 'nome'


// const: É usada para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado após a inicialização.
const a = 10
a = 15
// Mudar o valor de 'a' irá gerar um erro!


// var: É a forma antiga de declarar variáveis em JavaScript, é recomendável usar 'let' ou 'const'
var idade = 35
idade = 20
// O escopo de função e algumas peculiaridades podem levar a hoisting (elevação da declaração) e outros comportamentos inesperados
