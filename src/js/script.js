import '../sass/main.scss';
import carousel from './modules/carousel';
import scroll from './modules/scroll';
import side_menu from './modules/side-menu';

window.addEventListener('DOMContentLoaded', () => {
  carousel();
  scroll();
  side_menu();
});