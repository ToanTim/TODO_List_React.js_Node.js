import React from "react";
import SwiperSlideComponent from "./SwiperSlide.component";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperImage1 from "../assets/images/slide1.png";
import SwiperImage3 from "../assets/images/slide3.png";
import SwiperImage2 from "../assets/images/slide2.png";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperComponent = () => {
  const text = [
    "Come up with ideas",
    "Use work list and take note",
    "Let's do it and achieve success",
  ];

  return (
    // <SwiperSlideComponent
    //   SwiperImage={SwiperImage3}
    //   headText={text[0]}
    //   subText1={text[1]}
    //   subText2={text[2]}
    // ></SwiperSlideComponent>
    <Swiper
      scrollbar={{
        hide: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <SwiperSlideComponent
          SwiperImage={SwiperImage1}
          headText={text[0]}
          //subText1={text[1]}
          //subText2={text[2]}
        ></SwiperSlideComponent>
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideComponent
          SwiperImage={SwiperImage2}
          headText={text[1]}
          //subText1={text[1]}
          //subText2={text[2]}
        ></SwiperSlideComponent>
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideComponent
          SwiperImage={SwiperImage3}
          headText={text[2]}
          //subText1={text[1]}
          //subText2={text[2]}
        ></SwiperSlideComponent>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
