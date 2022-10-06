import updateCarouselSlide from './updateCarouselSlide'

export default function globalListener(event) {
  if (event.target.dataset.eclipseAction === "eclipse-carousel: left click") {
    updateCarouselSlide(event.target, {
      type: "left",
    });
  }
  if (event.target.dataset.eclipseAction === "eclipse-carousel: right click") {
    updateCarouselSlide(event.target, {
      type: "right",
    });
  }
}
