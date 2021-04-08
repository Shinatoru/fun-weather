function sideMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.side-menu');
  const fadeArea = document.querySelector('.fade-area');

  burger.addEventListener('click', e => {
    fadeArea.classList.add('fade');
    menu.style.width = "300px";
    document.body.style.overflow = "hidden";
    
    window.addEventListener('resize', e => {
      if (window.innerWidth > 1200) {
        fadeArea.classList.remove('fade');
        menu.style.width = "0";
        document.body.style.overflow = "";
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key == "Escape") {
        fadeArea.classList.remove('fade');
        menu.style.width = "0";
        document.body.style.overflow = "";
      }
    });
  });
}

export default sideMenu;