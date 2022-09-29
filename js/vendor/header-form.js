// HEADER-FORM

const input = document.querySelector('.header__form');
const searchIn = document.querySelector('.btn_search');
const searchOut = document.querySelector('.btn_close');

searchIn.addEventListener('click', () => {
  input.classList.add('header-form-active');
  searchIn.classList.add('header-search-remove');
})

searchOut.addEventListener('click', (e) => {
  e.preventDefault();
  input.classList.remove('header-form-active');
  searchIn.classList.remove('header-search-remove');
})
