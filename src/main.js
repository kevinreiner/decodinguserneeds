const menuBars = document.getElementById('menu-bars');
const myNav = document.getElementById('my-nav');
const hideBtns = document.querySelectorAll('.nav-button');
const hideStart = document.getElementById('hide [1]');
const hideProjects = document.getElementById('hide [2]');
const hideContact = document.getElementById('hide [5]');
  
let navClose = false; // Flag, um den aktuellen Zustand der Navigation zu speichern
  
    function toggleNav() {
      // Toggle der 'change'-Klasse für die Animation der Menü-Bars
      menuBars.classList.toggle('change');

      // Navigation-Höhe wechseln basierend auf dem Zustand
      if (navClose) {
        myNav.style.height = "70px";
        hideBtns.forEach(btn => btn.classList.add ('hide'));

      } else {
        myNav.style.height = "100%";
        hideBtns.forEach(btn => btn.classList.remove ('hide'));
      }
      
      // Zustand umkehren
      navClose = !navClose;
    }

// Event Listeners
menuBars.addEventListener('click', toggleNav);
hideStart.addEventListener('click',toggleNav);
hideProjects.addEventListener('click',toggleNav);
hideContact.addEventListener('click',toggleNav);
 