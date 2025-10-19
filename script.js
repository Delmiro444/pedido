 const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');

    // Abre/fecha menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    // Fecha menu ao clicar em overlay
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
      });
    });