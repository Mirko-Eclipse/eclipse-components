import { createCarousel, createCarouselContainer } from "./Carousel";

export default {
  title: "Cunard/Carousel",
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => createCarousel(args);

export const Default = Template.bind({});
Default.args = {
  width: "500px",
  height: "300px",
  picturesUrls: [
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg",
    "http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg",
    "https://media.macphun.com/img/uploads/customer/blog/504/15360610675b8e6e8b52bd36.49629027.jpg?q=85&w=1680",
  ],
  arrows: {
    height: "20px",
    width: "20px",
    svgPath: `M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
    c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
    z`,
    svgFill: "#ffffff",
  },
};
