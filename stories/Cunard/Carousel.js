import "./Carousel.css";


export const createCarouselContainer = (args) => {
  console.log("args :>> ", args);
  const container = document.createElement("li");
  container.className = "eclipse-carousel__container";
  return container;
};

export const createCarousel = (args) => {
  const carousel = document.createElement("div");
  carousel.className = ["eclipse-carousel"];
  carousel.style.height = args.height;
  carousel.style.width = args.width;
  carousel.appendChild(createCarouselContainer());
  return carousel;
};