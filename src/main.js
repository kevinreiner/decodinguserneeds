const menuBars = document.getElementById ('menu-bars');

function toggleNav() {
    menuBars.classList.toggle('change');
}

// Event Listeners

menuBars.addEventListener('click', toggleNav);