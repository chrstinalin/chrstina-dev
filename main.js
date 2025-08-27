const menuCheckbox = document.getElementById('menuCheckbox');
const mainContent = document.querySelector('main');

menuCheckbox.addEventListener('change', () => {
    mainContent.classList.toggle('menu-open', menuCheckbox.checked);
});