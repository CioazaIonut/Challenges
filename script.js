const cardPrincipal = document.querySelector(".first-section-container");
const cardUnu = document.querySelector(".second-section-container");

const submitSubscribe = document.querySelector(".button-subscribe");



const goToNextStep = () => {

    cardPrincipal.style.display = 'none';
    cardUnu.style.display = 'block';

}

submitSubscribe.addEventListener("click", goToNextStep);