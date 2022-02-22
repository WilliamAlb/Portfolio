import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThreeCanvas from "./ThreeCanvas";

import { icons } from "./utils/icons";
import { images } from "./utils/images";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function About() {
  return (
    <section id="About" className="page">
      {/* <div className='about-content-container'>
                <div className='profile-pic'></div>
                <div className='about-text-container'>
                    <h2>William Allaberdyev</h2>
                    <p>Hi! My name's William, I'm a passionate 25 years old fullstack developer living in Haifa with my girlfriend, my dog and my cat.</p>
                    <h3>Here's my Stack:</h3>
                </div>
            </div> */}
      <ThreeCanvas />
      <div id="carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          swipeable={true}
          draggable={true}
        >
          <div className="stack-icon-container">
            {icons.react}
            <p>React</p>
          </div>
          <div className="stack-icon-container">
            {icons.js}
            <p>Javascript</p>
          </div>
          <div className="stack-icon-container">
            {icons.html}
            <p>HTML</p>
          </div>
          <div className="stack-icon-container">
            {icons.css}
            <p>CSS</p>
          </div>
          <div className="stack-icon-container">
            {icons.github}
            <p>Github</p>
          </div>
          <div className="stack-icon-container">
            {icons.figma}
            <p>Figma</p>
          </div>
          <div className="stack-icon-container">
            {icons.redux}
            <p>Redux</p>
          </div>
        </Carousel>
      </div>
      <div className="pet-container">
        <img className="cat-pic" src={images.eva} alt="my cat eva"></img>
        <img className="dog-pic" src={images.jerry} alt="my dog jerry"></img>
      </div>
    </section>
  );
}

export default About;
