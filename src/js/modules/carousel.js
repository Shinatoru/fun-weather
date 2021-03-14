function carousel(sliderSelector, slideSelector, currentIndex = 1) {
  const slider = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slideSelector);
  let leftArrow, rightArrow;
  let pos = [currentIndex - 1, currentIndex, currentIndex + 1];

  function update(method) {
    slides[pos[0]].classList.remove('prev');
    slides[pos[1]].classList.remove('current');
    slides[pos[2]].classList.remove('next');

    switch (method) {
      case 'prev':
        pos.forEach((item, i) => {
          item == 0 ? pos[i] = slides.length - 1 : pos[i]--;
        });
        break;
      case 'next':
        pos.forEach((item, i) => {
          item == slides.length - 1 ? pos[i] = 0 : pos[i]++;
        });
        break;
    }

    slides[pos[0]].classList.add('prev');
    slides[pos[1]].classList.add('current');
    slides[pos[2]].classList.add('next');
  }

  function createArrows() {
    leftArrow = document.createElement('button');
    rightArrow = document.createElement('button');
    leftArrow.classList.add('arrow', 'left-arrow');
    rightArrow.classList.add('arrow', 'right-arrow');
    
    slider.prepend(leftArrow);
    slider.append(rightArrow);
  }

  createArrows();

  leftArrow.addEventListener('click', () => update('prev'));
  rightArrow.addEventListener('click', () => update('next'));

  slides[pos[0]].classList.add('prev');
  slides[pos[2]].classList.add('next');

  slides.forEach(item => {

    item.addEventListener('click', e => {
      const target = e.currentTarget;

      if (target && target.classList.contains('prev')) {
        update('prev');
      }

      if (target && target.classList.contains('next')) {
        update('next');
      }
    });
  });
}

export default carousel;