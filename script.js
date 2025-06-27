document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Переключение класса 'active' для меню при клике на кнопку
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку (если оно открыто)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });
});
