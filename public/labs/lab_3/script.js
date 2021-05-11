/* Put your javascript in here */
let width = 50;
let count = 3;
let slider = carousel.querySelector('a');
let item = carousel.querySelectorAll('img');

carousel.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    slider.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (item.length - count));
    slider.style.marginLeft = position + 'px';
};