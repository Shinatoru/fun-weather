import '../sass/main.scss';
import carousel from './modules/carousel';
import scroll from './modules/scroll';
import sideMenu from './modules/side-menu';

window.addEventListener('DOMContentLoaded', () => {
  carousel();
  scroll();
  sideMenu();
});