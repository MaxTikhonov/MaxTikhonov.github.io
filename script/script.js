const images = document.querySelectorAll('.slider .slider-line img');   
const sliderLine = document.querySelector('.slider-line');;
let count = 0;
let width;
function init() {
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width*3 + 'px';
   images.forEach (item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
   });
   rollSlider();
}
window.addEventListener('load', init);
window.addEventListener('resize', init);
document.querySelector('.slider-next').addEventListener('click', function() {
   count++;
   rollSlider();
});
function rollSlider() {
   if(count < 0) {
      count = images.length - 1;
   }
   if(count > images.length - 1) {
      count = 0;
   }
   sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
document.querySelector('.slider-prev').addEventListener('click', function() {
   count--;
   rollSlider();
});