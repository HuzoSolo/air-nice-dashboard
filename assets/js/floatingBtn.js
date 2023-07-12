
function toggleMenu() {
    const menu = document.querySelector('.floating-menu');
    const addButton = document.querySelector('.add-button');

    menu.classList.toggle('show');
    addButton.classList.toggle('active');
}