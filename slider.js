$(document).ready(function () {
  let currentIndex = 0;
  const $sliderItems = $('.slider-item');
  const totalItems = $sliderItems.length;

  $sliderItems.hide().eq(currentIndex).show();

  function showNext() {
    $sliderItems.eq(currentIndex).fadeOut(600); 
    currentIndex = (currentIndex + 1) % totalItems;
    $sliderItems.eq(currentIndex).fadeIn(600);
  }

  setInterval(showNext, 3000);
});