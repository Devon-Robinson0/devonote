const toggleButton = document.getElementById('toggle-btn');

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}