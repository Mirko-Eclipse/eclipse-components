import { createCarousel, createCarouselContainer } from "./Carousel";

export default {
  title: "Cunard/Carousel",
};

const Template = (args) => createCarousel(args);

export const Default = Template.bind({});
Default.args = {
  width: "500px",
  height: "300px",
  picturesUrls: [
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg",
    'http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg',
    'https://media.macphun.com/img/uploads/customer/blog/504/15360610675b8e6e8b52bd36.49629027.jpg?q=85&w=1680'
  ],
};
