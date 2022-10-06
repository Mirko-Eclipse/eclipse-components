import getCarousel from "./getCarousel";

export default function getCarouselSlider(target) {
    const carousel = getCarousel(target);
    const slider = carousel.querySelector('.eclipse-carousel__container');
    return slider;
};
