import React from "react";
import headerImage2 from "../assets/images/slide1.png";
import "./SwiperSlide.css";
const SwiperSlideComponent = ({
  SwiperImage,
  headText,
  subText1,
  subText2,
}) => {
  const text = "Share your stories, we are here to listen";
  const text1 =
    "Sometime, life is just hard, and some days are just rough... And sometime you just gotta cry before you can move forward...";
  const text2 =
    "In here, where you can cry, be angry, be sad, you want to share a story but you don't know who to share with, then you are in the right place";
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
