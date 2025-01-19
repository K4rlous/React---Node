// Estruturas de Controle Condicionais

// If: Usado para executar um bloco de código se a condição especificada for verdadeira.
let idade01 = 18
if (idade01>= 18){
    console.log('Você é maior de idade!')
}


// Else: Usado junto com if para executar um bloco de código se a condição especificada no if for falsa.
let sexo = 'M'
if (sexo = 'M'){
    console.log('Você é um homem!')
} else {
    console.log('Você é uma mulher!')
}


// Else if: Usado para testar múltiplas condições. Pode haver vários else if entre if e else.
let nota = 85;
if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else {
    console.log("Nota C ou inferior");
}


// Switch: Usado para executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa ao uso de múltiplos else if.
let cor = "verde";
switch (cor) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Cuidado");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor desconhecida");
}
