import React from "react";
import Nature1 from "../assets/nature2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Nature1})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          <strong>
            Nature refers to the interaction between the physical surroundings
            around us and the life within it like atmosphere, climate, natural
            resources, ecosystem, flora, fauna, and humans. Nature is indeed
            God’s precious gift to Earth. It is the primary source of all the
            necessities for the nourishment of all living beings on Earth. Right
            from the food we eat, the clothes we wear, and the house we live in
            is provided by nature. Nature is called ‘Mother Nature’ because just
            like our mother, she is always nurturing us with all our needs.
            Whatever we see around us, right from the moment we step out of our
            house is part of nature. The trees, flowers, landscapes, insects,
            sunlight, breeze, everything that makes our environment so beautiful
            and mesmerizing are part of Nature. In short, our environment is
            nature. Nature has been there even before the evolution of human
            beings.
          </strong>
        </p>
      </div>
    </div>
  );
}

export default About;
