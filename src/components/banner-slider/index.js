import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper.scss";
import "./styles.scss";

const renderImage = (i) => {
  return (
    <SwiperSlide key={i}>
      <img src={`https://picsum.photos/id/${i + 1}/1000/300`} />
    </SwiperSlide>
  );
};

const BannerSlider = () => {
  return (
    <div className="banner-wrapper">
      <Swiper id="main">{[1, 2, 3, 4].map(renderImage)}</Swiper>
    </div>
  );
};

export default BannerSlider;
