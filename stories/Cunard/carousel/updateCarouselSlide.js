import getCarousel from "./getCarousel";
import getCarouselActiveIndex from "./getCarouselActiveIndex";
import getCarouselSlidesNumber from "./getCarouselSlidesNumber";
import isLeftLimitReached from "./isLeftLimitReached";
import isLeftScroll from "./isLeftScroll";
import isRightScroll from "./isRightScroll";
import scrollToSlideAndBullet from "./scrollToSlideAndBullet";

export default function updateCarouselSlide(target, data) {
  const activeIndex = Number(getCarouselActiveIndex(target));
  const maxIndex = getCarouselSlidesNumber(target) - 1;
  const carousel = getCarousel(target);
  if (isLeftScroll(data)) {
    if (activeIndex > 0) {
      scrollToSlideAndBullet(target, activeIndex - 1);
      carousel.setAttribute("data-eclipse-carousel-index", activeIndex - 1);
    }
    if (isLeftLimitReached(activeIndex)) {
      scrollToSlideAndBullet(target, maxIndex);
      carousel.setAttribute("data-eclipse-carousel-index", maxIndex);
    }
  }
  if (isRightScroll(data)) {
    if (activeIndex < maxIndex) {
      scrollToSlideAndBullet(target, activeIndex + 1);
      carousel.setAttribute("data-eclipse-carousel-index", activeIndex + 1);
    }
    if (activeIndex === maxIndex) {
      scrollToSlideAndBullet(target, 0);
      carousel.setAttribute("data-eclipse-carousel-index", 0);
    }
  }
}
