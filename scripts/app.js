document.addEventListener('DOMContentLoaded', function (e) {
  const menu = document.querySelector('.menu');
  const menuOpen = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  if (!menuClose || !menuOpen || !menu) return;

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
      menu.classList.remove('is-active');
    }
  });

  menuOpen.addEventListener('click', function (e) {
    menu.classList.add('is-active');
  });

  menuClose.addEventListener('click', function (e) {
    menu.classList.remove('is-active');
  });
});
