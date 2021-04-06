function scroll() {
  const scrollUp = document.querySelector('.scroll-up');
  const scrollDown = document.querySelector('.scroll-down');
  const features = document.querySelector('.features');

  scrollDown.addEventListener('click', e => {
    features.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  });

  scrollUp.addEventListener('click', e => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });
}

export default scroll;