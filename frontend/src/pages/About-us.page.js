import React from "react";
import "./About-us.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className='grid-container'>
        <div className='grid-item'>
          <p>Toan Tran: Full-stack developer</p>
          <p>I am a student at Tampere University Of Applied Sciences. My enthusiasm is making website</p>
          <a href="https://www.linkedin.com/in/toan-tran-tim/">Linkedin</a>
          <p> </p>
        </div>
        <div className='grid-item'>
          <p>Son Nguyen: Front-end developer</p>
          <p>I am a student at Tampere University Of Applied Science. I love analysing and developing embedded system</p>
          <a href="https://www.linkedin.com/in/sơn-nguyễn-đức-a819a5225/">Linkedin</a>
          <p> </p>
        </div>        
      </div>
    </div>
  );
};

export default AboutUs;
