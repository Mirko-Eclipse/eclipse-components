import getCarouselActiveIndex from "./getCarouselActiveIndex";
import getCarouselRequiredSlide from "./getCarouselRequiredSlide";

export default function scrollToSlideAndBullet(target, value) {
    const requiredSlide = getCarouselRequiredSlide(target, {
        value: value,
    });
    requiredSlide.scrollIntoView({
        behaviour: 'smooth',
        block: 'nearest',
        inline: 'start',
    });
};
