import getCarousel from "./getCarousel";

export default function getCarouselActiveIndex(target) {
  const carousel = getCarousel(target);
  return carousel.dataset.eclipseCarouselIndex;
}
