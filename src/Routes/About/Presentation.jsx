import React from "react";
import "./AboutCSS/Presentation.css";

function Presentation() {
  return (
    <section className="section_presentation">
      <article className="article_presentation_text">
        <h1>About Me.</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Highly motivated and enthusiastic Full Stack Web Developer with over
          two years of experience in coding and building websites. Proficient in
          transforming intricate layouts into modern designs with excellent
          usability, scalability, and accessibility.
        </p>
      </article>
      <article className="article_presentation_photo">
        <img
          className="img_presentation"
          src="photo_profile.png"
          alt="Photo Profile"
        />
      </article>
    </section>
  );
}

export default Presentation;
