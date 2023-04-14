// Verifique a distância da primeira imagem
// em relação ao topo da página
const img1 = document.querySelectorAll(".animais img");
console.log(img1[0].offsetTop);
// Retorne a soma da largura de todas as imagens
function somaimg() {
  img1.forEach((item) => {
    const allImg = item.getBoundingClientRect();
    const tudoSoma = img1.length * allImg.width;
    console.log(tudoSoma);
  });
}
window.onload = function () {
  somaimg();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

console.log(links);

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "é maior ou igual");
  } else {
    console.log(link, "nao é maior");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia("(max-width: 720px").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
