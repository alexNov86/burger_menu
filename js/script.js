document.addEventListener("DOMContentLoaded", (event) => {
  const headerBurger = document.querySelector(".header__burger");
  headerBurger.addEventListener("click", (event) => {
    const headerMenu = document.querySelector(".header__menu");
    headerMenu.classList.toggle("active");
    headerBurger.classList.toggle("active");
    document.body.classList.toggle("block_scroll");
  });
});
