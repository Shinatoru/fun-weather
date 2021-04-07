function sideMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.side-menu');

  burger.addEventListener('click', e => {
    menu.classList.add('show');

    window.addEventListener('resize', e => {
      if (window.innerWidth > 1200) {
        menu.classList.remove('show');
      } else {
        menu.classList.add('show');
      }
    });
  
    document.addEventListener('keydown', e => {
      if (e.key == "Escape") {
        menu.classList.remove('show');
      }
    });
  });
}

export default sideMenu;