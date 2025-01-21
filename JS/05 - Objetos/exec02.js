// Métodos de Objetos 

// Object.keys: Retorna um array contendo as chaves do objeto.
const pessoa = { nome: 'Alice', idade: 30 };
const indice = Object.keys(pessoa); // Output: ['nome', 'idade']


// Object.values: Retorna um array contendo os valores do objeto.
const valores = Object.values(pessoa); // Output: ['Alice', 30]


// Object.entries: Retorna um array de arrays contendo pares chave-valor do objeto.
const array = Object.entries(pessoa); // Output: [['nome', 'Alice'], ['idade', 30]]


// Object.assign: Copia as propriedades de um ou mais objetos para um objeto destino.
const alvo = { a: 1 };
const fonte = { b: 2 };
const resultado = Object.assign(alvo, fonte); // Output: { a: 1, b: 2 }


// Object.freeze: Congela um objeto para que ele não possa ser modificado.
const objeto = { prop: 42 };
Object.freeze(objeto);
objeto.prop = 33; // Isso não terá efeito
console.log(objeto.prop); // Output: 42


// Object.seal: Sela um objeto para que novas propriedades não possam ser adicionadas, mas as existentes podem ser modificadas.
const obj = { prop: 42 };
Object.seal(obj);
obj.prop = 33; // Isso terá efeito
delete obj.prop; // Isso não terá efeito
console.log(obj.prop); // Output: 33


