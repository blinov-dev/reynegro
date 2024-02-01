// Открытие/закрытие меню бургер
const menuBurger = document.querySelector('.menu-burger');
const mainNav = document.querySelector('.main-nav');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('menu-burger--active');
  mainNav.classList.toggle('main-nav--active');
});
