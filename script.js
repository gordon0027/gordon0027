const themeButton = document.getElementById('themeButton');
const body = document.body;
const header = document.getElementByClass("header-div");

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
  header.classList.toggle('dark-theme')
});
