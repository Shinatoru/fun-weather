import '../sass/main.scss';
import carousel from './modules/carousel';

window.addEventListener('DOMContentLoaded', () => {
  carousel('.slider', '.slide');
});