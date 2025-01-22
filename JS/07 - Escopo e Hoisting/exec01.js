// Escopo de Função

/*
O escopo de função refere-se ao contexto em que as variáveis são visíveis ou acessíveis dentro de uma função. Em JavaScript, as variáveis declaradas com a palavra-chave var têm escopo de função. Isso significa que elas estão disponíveis em qualquer lugar dentro da função onde foram declaradas, mas não fora dela.
*/
function minhaFuncao() {
    var x = 10; // Escopo de função
    console.log(x); // 10
}

console.log(x); // ReferenceError: x is not defined
// Neste exemplo, a variável x está acessível apenas dentro de minhaFuncao e não fora dela.


// Escopo de Bloco
/*
O escopo de bloco, introduzido no ECMAScript 2015 (ES6), refere-se ao contexto dentro de um bloco de código delimitado por {} (chaves). Variáveis declaradas com let e const têm escopo de bloco. Elas estão disponíveis apenas dentro do bloco onde foram declaradas.
*/
if (true) {
    let y = 20; // Escopo de bloco
    const z = 30; // Escopo de bloco
    console.log(y); // 20
    console.log(z); // 30
}
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
// Neste exemplo, as variáveis y e z estão acessíveis apenas dentro do bloco if e não fora dele.


// Diferenças:
/*
Escopo de Função:
Variáveis declaradas com var.
A variável está disponível em qualquer lugar dentro da função onde foi declarada.
Pode ser "hoisted" (movida para o topo do seu contexto de execução).

Escopo de Bloco:
Variáveis declaradas com let e const.
A variável está disponível apenas dentro do bloco onde foi declarada.
Não são "hoisted" da mesma maneira que var.
*/