// Seleção e manipulação de elementos do DOM

// O DOM é uma representação em árvore de uma página web, onde cada nó representa uma parte do documento (como um elemento HTML, atributo ou texto). Existem várias maneiras de selecionar elementos do DOM em JavaScript.

// getElementById:
let elementos1 = document.getElementById("meuId"); // Seleciona um elemento pelo seu ID.

// getElementsByClassName:
let elementos2 = document.getElementsByClassName("minhaClasse"); // Seleciona todos os elementos com uma determinada classe. Retorna uma coleção de elementos.

// getElementsByTagName:
let elementos3 = document.getElementsByTagName("div"); // Seleciona todos os elementos de uma determinada tag. Também retorna uma coleção de elementos.

// querySelector:
let elementos4 = document.querySelector(".minhaClasse"); // Seleciona o primeiro elemento que corresponde a um seletor CSS.

// querySelectorAll:
let elementos = document.querySelectorAll(".minhaClasse"); // Seleciona todos os elementos que correspondem a um seletor CSS. Retorna uma NodeList.


// Manipulação de Elementos do DOM
// Uma vez que você tenha selecionado um elemento, você pode manipulá-lo de várias maneiras:

// Alterar conteúdo de texto:
elemento.textContent = "Novo Conteúdo";

// Alterar HTML interno:
elemento.innerHTML = "<p>Novo HTML</p>";

// Alterar estilos:
elemento.style.color = "blue";

// Adicionar/Remover Classes:
elemento.classList.add("novaClasse");
elemento.classList.remove("minhaClasse");

// Adicionar/Remover Atributos:
elemento.setAttribute("data-nome", "valor");
elemento.removeAttribute("data-nome");

// Adicionar Elementos:
let novoElemento = document.createElement("div");
novoElemento.textContent = "Sou um novo elemento";
elemento.appendChild(novoElemento);
