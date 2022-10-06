import getCarousel from './getCarousel'

export default function getCarouselSlides(target) {
    const carousel = getCarousel(target);
    const slides = carousel.querySelectorAll('.eclipse-carousel__picture');
    return slides;
};
