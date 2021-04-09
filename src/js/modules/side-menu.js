function sideMenu() {
  const burgers = document.querySelectorAll('.burger');
  const menu = document.querySelector('.side-menu');
  const fadeArea = document.querySelector('.fade-area');
  const closeMenu = function() {
    fadeArea.classList.remove('fade');
      menu.style.width = "0";
      document.body.style.overflow = "";
  };

  burgers.forEach(burger => {
    burger.addEventListener('click', e => {
      fadeArea.classList.add('fade');
      menu.style.width = "300px";
      document.body.style.overflow = "hidden";
      
      window.addEventListener('resize', e => {
        if (window.innerWidth > 1200) {
          closeMenu();
        }
      });
  
      fadeArea.addEventListener('click', e => {
        closeMenu();
      });
  
      document.addEventListener('keydown', e => {
        if (e.key == "Escape") {
          closeMenu();
        }
      });
    });
  });

}

export default sideMenu;