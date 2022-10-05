import { createCarousel, createCarouselContainer } from "./Carousel";

export default {
  title: "Cunard/Carousel",
};


const Template = (args) => createCarousel(args);

export const Default = Template.bind({});
Default.args = {
  width: '500px',
  height: '300px'
}
