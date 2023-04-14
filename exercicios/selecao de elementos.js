// Retorne no console todas as imagens do site
const tdsImg = document.querySelectorAll("img");
console.log(tdsImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const tdasImg = document.querySelectorAll('[src^="img/ima"]');
console.log(tdasImg);
// Selecione todos os links internos (onde o href começa com #)
const todosLinks = document.querySelectorAll('[href^="#"]');
console.log(todosLinks);
// Selecione o primeiro h2 dentro de .animais-descricao
const selectH2 = document.getElementsByTagName(".animais-descricao h1");
console.log(selectH2);
// Selecione o último p do site
