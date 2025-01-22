// Eventos e event listeners

// Eventos
/*
Um evento é uma ação ou ocorrência que acontece no navegador que você pode responder. Aqui estão alguns exemplos comuns de eventos:
click: ocorre quando um elemento é clicado.
mouseover: ocorre quando o ponteiro do mouse passa sobre um elemento.
keyup: ocorre quando uma tecla é liberada.
load: ocorre quando um recurso, como uma página ou imagem, é carregado.
*/

// Event Listeners
/*
Um event listener é uma função que espera por um evento específico e executa uma ação quando o evento ocorre. Em JavaScript, você usa addEventListener para configurar event listeners.
Exemplo:
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de Eventos</title>
</head>
<body>
    <button id="meuBotao">Clique em mim!</button>
    <script>
        // Selecionar o botão
        const botao = document.getElementById("meuBotao");
        
        // Função que será chamada quando o evento ocorrer
        function mostrarMensagem() {
            alert("Você clicou no botão!");
        }
        
        // Adicionar o event listener ao botão
        botao.addEventListener("click", mostrarMensagem);
    </script>
</body>
</html>

Neste exemplo:
Selecionamos o botão com document.getElementById("meuBotao").
Definimos a função mostrarMensagem que exibe uma mensagem.
Usamos botao.addEventListener("click", mostrarMensagem) para adicionar o event listener ao botão, especificando que a função mostrarMensagem deve ser chamada quando o evento click ocorrer.

Você também pode remover event listeners usando removeEventListener:
botao.removeEventListener("click", mostrarMensagem);

Além dos eventos padrão, você também pode criar eventos personalizados:

const meuEvento = new Event("meuEventoPersonalizado");
// Adicionar event listener para o evento personalizado
botao.addEventListener("meuEventoPersonalizado", function() {
    alert("Evento personalizado disparado!");
});
// Disparar o evento personalizado
botao.dispatchEvent(meuEvento);

*/
