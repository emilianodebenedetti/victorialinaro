const carousel = document.querySelector(".carousel-item")

let intervalo = null;
let step = 100;
const start = () => {
    intervalo = setInterval(function() {
        carousel.scrollLeft =+ step       
    }, 10)
};
const stop = () => {
    clearInterval(intervalo)
};
carousel.addEventListener('mouseover', () => {
    stop();
})
carousel.addEventListener('mouseout', () => {
    start();
})

start();


