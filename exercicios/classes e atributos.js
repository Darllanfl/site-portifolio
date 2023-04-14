// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
console.log(menu);
menu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(menu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");
console.log(menu);
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtribute = img.hasAttribute("alt");
  console.log(possuiAtribute);
});

// Modifique o href do link externo no menu
const menu4 = document.querySelector('a[href^="http"]');
console.log(menu4);

menu4.setAttribute("href", "https://origamid");
console.log(menu4);
