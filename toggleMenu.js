window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    toggleBtn.classList.toggle('open');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        mobileMenu.classList.add('hidden');
        toggleBtn.classList.remove('open');
      }
    });

    link.addEventListener('mouseenter', () => {
      mobileMenu.classList.add('transparent-bg');
    });
    link.addEventListener('mouseleave', () => {
      mobileMenu.classList.remove('transparent-bg');
    });
  });
});
