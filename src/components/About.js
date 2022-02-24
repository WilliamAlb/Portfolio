import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThreeCanvas from "./ThreeCanvas";

import { icons } from "./utils/icons";

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
    </section>
  );
}

export default About;
