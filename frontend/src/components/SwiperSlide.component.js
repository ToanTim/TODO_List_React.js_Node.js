import React from "react";
import headerImage2 from "../assets/images/slide1.png";
import "./SwiperSlide.css";
const SwiperSlideComponent = ({
  SwiperImage,
  headText,
  subText1,
  subText2,
}) => {
  return (
    <header className="Header">
      <img className="HeaderImage" src={SwiperImage} alt="headerImage" />
      <div className="HeaderTexts">
        <h1 className="HeaderHeading">{headText}</h1>
        <p className="HeaderSubtitle">{subText1}</p>
        <p className="HeaderSubtitle">{subText2}</p>
      </div>
    </header>
  );
};

export default SwiperSlideComponent;
