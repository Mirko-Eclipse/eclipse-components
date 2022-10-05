import "./Carousel.css";

export const createCarouselContainer = (args) => {
  const container = document.createElement("li");
  container.style.height = args.height;
  container.style.width = args.width;
  container.className = "eclipse-carousel__container";
  args.picturesUrls.map((pictureUrl) => {
    args = {...args, pictureUrl}
    container.appendChild(createPicture(args));
  });
  return container;
};

export const createCarousel = (args) => {
  const carousel = document.createElement("div");
  carousel.className = ["eclipse-carousel"];
  carousel.style.height = args.height;
  carousel.style.width = args.width;
  carousel.appendChild(createCarouselContainer(args));
  return carousel;
};

export const createPicture = (args) => {
  const picture = document.createElement("picture");
  picture.style.height = args.height;
  picture.style.width = args.width;
  const source = document.createElement("source");
  source.srcset = args.pictureUrl;
  const img = document.createElement('img')
  img.style.height = args.height;
  img.style.width = args.width;
  img.loading = 'lazy'
  picture.appendChild(source);
  picture.appendChild(img);
  return picture;
};
