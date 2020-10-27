const buttonLeft = document.getElementById('onLeft');
const buttonRight = document.getElementById('onRight');
const imagesBox = document.querySelector('.current-image');
const reverseEls = document.querySelectorAll('.headerEls');
const images = document.querySelectorAll('.slide');
let currentFoot = 0;

buttonLeft.addEventListener('click', () => {
    currentFoot--;
    if (currentFoot < 0) {
        currentFoot = images.length - 1;
    }
    nextImg();
});

buttonRight.addEventListener('click', () => {
    currentFoot++;
    if (currentFoot > images.length - 1) {
        currentFoot = 0;
    }
    nextImg();
});

function nextImg(currentImage) {
    imagesBox.style.transform = `translateX(${-currentFoot * images[0].offsetWidth}px)`;
    document.body.style.background = `${images[currentFoot].getAttribute('data-bg-color')}`;
    reverseEls.forEach(el => el.style.color = `${images[currentFoot].getAttribute('data-text-color')}`);
}