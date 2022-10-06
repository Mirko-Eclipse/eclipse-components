import getCarousel from "./getCarousel";

export default function getCarouselRequiredSlide(target, data) {
  const carousel = getCarousel(target);
  const slide = carousel.querySelector(
    '.eclipse-carousel__picture[data-eclipse-id="' + data.value + '"]'
  );
  return slide;
}
