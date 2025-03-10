const menuBars = document.getElementById('menu-bars');
const myNav = document.getElementById('my-nav');

function toggleNav() {
  // Toggle the 'change' class for the menu bars animation
  menuBars.classList.toggle('change');
  
  // Toggle the navigation height
  if (myNav.style.height === "100%") {
    myNav.style.height = "6%";
  } else {
    myNav.style.height = "100%";
  }
}

// Event Listeners - just one is needed now
menuBars.addEventListener('click', toggleNav);