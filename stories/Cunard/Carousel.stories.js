import { createCarousel, createCarouselContainer } from "./Carousel";

export default {
  title: "Cunard/Carousel",
};


const Template = (args) => createCarousel(args);

export const Bullets = Template.bind({});
Bullets.args = {
  width: '500px',
  height: '300px'
}
