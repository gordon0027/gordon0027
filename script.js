const themeButton = document.getElementById('themeButton');
const body = document.body;
const header = document.header;
// const header = document.getElementByClass("header-div");

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
});

themeButton.addEventListener('click', () => {
  header.classList.toggle('dark-theme')
});

