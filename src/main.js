// const menuBars = document.getElementById('menu-bars');
// const myNav = document.getElementById('my-nav');

// function toggleNav() {
//   // Toggle the 'change' class for the menu bars animation
//   menuBars.classList.toggle('change');
  
//   // Toggle the navigation height
//   if (myNav.style.height === "100%") {
//     myNav.style.height = "6vh";
//   } else {
//     myNav.style.height = "100%";
//   }
// }

// // Event Listeners - just one is needed now
// menuBars.addEventListener('click', toggleNav);


document.addEventListener('DOMContentLoaded', function() {
    const menuBars = document.getElementById('menu-bars');
    const myNav = document.getElementById('my-nav');
  
    let navOpen = false; // Flag, um den aktuellen Zustand der Navigation zu speichern
  
    function toggleNav() {
      // Toggle der 'change'-Klasse für die Animation der Menü-Bars
      menuBars.classList.toggle('change');
      
      // Navigation-Höhe wechseln basierend auf dem Zustand
      if (navOpen) {
        myNav.style.height = "6vh";
      } else {
        myNav.style.height = "100%";
      }
      
      // Zustand umkehren
      navOpen = !navOpen;
    }
  
    // Event Listener für Klick- und Touch-Events hinzufügen
    menuBars.addEventListener('click', toggleNav);
    menuBars.addEventListener('touchstart', toggleNav);
  });