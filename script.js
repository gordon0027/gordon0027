function toggleMenu() {
    const menu = document.querySelector('.header-buttons');
    menu.classList.toggle('active');
}

// Закрытие меню при клике вне его области
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.header-buttons');
    const burger = document.querySelector('.burger-menu');

    // Если клик не по меню и не по кнопке бургера, скрываем меню
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
