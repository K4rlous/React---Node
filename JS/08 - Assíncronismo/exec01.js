// Callbacks, Promises e async/await

// Callbacks: Um callback é uma função passada como argumento para outra função e que é executada após a conclusão dessa função. Callbacks são frequentemente usados em operações assíncronas, como leitura de arquivos, requisições de rede, e temporizadores.
function fazerAlgo(callback) {
    console.log("Fazendo algo...");
    callback();
}

function depoisDeFazerAlgo() {
    console.log("Feito!");
}

fazerAlgo(depoisDeFazerAlgo);
// Neste exemplo, depoisDeFazerAlgo é passado como callback para fazerAlgo.


// Promises: Promises foram introduzidas no ES6 e fornecem uma maneira mais robusta de lidar com operações assíncronas. Uma promise representa uma operação que ainda não foi concluída, mas que eventualmente será resolvida ou rejeitada
let minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Simulando sucesso ou falha

    if (sucesso) {
        resolve("Operação bem-sucedida!");
    } else {
        reject("Algo deu errado.");
    }
});

minhaPromise
    .then(mensagem => {
        console.log(mensagem); // "Operação bem-sucedida!"
    })
    .catch(erro => {
        console.log(erro);
    });
// Aqui, minhaPromise será resolvida com a mensagem "Operação bem-sucedida!" ou rejeitada com a mensagem "Algo deu errado."


// Async/Await: Async/Await é uma sintaxe introduzida no ES8 que facilita a escrita e leitura de código assíncrono usando promises. async é usado para declarar uma função assíncrona, e await é usado para esperar a resolução de uma promise.
async function minhaFuncaoAssincrona() {
    try {
        let mensagem = await minhaPromise;
        console.log(mensagem); // "Operação bem-sucedida!"
    } catch (erro) {
        console.log(erro);
    }
}

minhaFuncaoAssincrona();
// Neste exemplo, a função minhaFuncaoAssincrona usa await para esperar a resolução de minhaPromise. O código dentro da função parece síncrono, mas é executado de forma assíncrona.

/*
Comparação
Callbacks: Simples, mas pode levar ao "callback hell" quando aninhados.
Promises: Melhoram a legibilidade e evitam o "callback hell".
Async/Await: Tornam o código assíncrono mais fácil de ler e escrever, parecendo código síncrono.
*/