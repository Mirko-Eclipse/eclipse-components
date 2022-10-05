import "./Carousel.css";

export const createCarouselContainer = (args) => {
  const container = document.createElement("li");
  container.style.height = args.height;
  container.style.width = args.width;
  container.className = "eclipse-carousel__container";
  args.picturesUrls.map((pictureUrl) => {
    args = { ...args, pictureUrl };
    container.appendChild(createPicture(args));
  });
  return container;
};

export const createCarousel = (args) => {
  const carousel = document.createElement("div");
  carousel.className = "eclipse-carousel";
  carousel.style.height = args.height;
  carousel.style.width = args.width;
  carousel.appendChild(createArrow(args, "left"));
  carousel.appendChild(createCarouselContainer(args));
  carousel.appendChild(createArrow(args, "right"));

  return carousel;
};

export const createPicture = (args) => {
  const picture = document.createElement("picture");
  picture.style.height = args.height;
  picture.style.width = args.width;
  picture.className = "eclipse-carousel__picture";
  const source = document.createElement("source");
  source.srcset = args.pictureUrl;
  const img = document.createElement("img");
  img.style.height = args.height;
  img.style.width = args.width;
  img.loading = "lazy";
  picture.appendChild(source);
  picture.appendChild(img);
  return picture;
};

export const createArrow = (args, direction) => {
  const button = document.createElement("button");
  button.style.top = (parseInt(args.height.replace("px", "")) / 2) - parseInt(args.arrows.height) / 2 + "px";
  button.classList = [
    "eclipse-carousel__arrow",
    "eclipse-carousel__arrow__" + direction,
  ].join(" ");
  switch (direction) {
    case "left":
      button.style.left = '1rem';
      break;
    case "right":
      button.style.right = '1rem';
      break;
  }
  const svg = document.createElement("svg");
  svg.style.height = args.arrows.height;
  svg.style.width = args.arrows.width;
  const path = document.createElement("path");
  path.setAttribute("fill", args.arrows.svgFill);
  path.setAttribute("d", args.arrows.svgPath);
  svg.appendChild(path);
  button.appendChild(svg);
  return button;
};
