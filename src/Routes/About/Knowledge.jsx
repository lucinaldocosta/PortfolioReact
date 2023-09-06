import React from "react";
import "./AboutCSS/Knowledge.css";

function Knowledge() {
  return (
    <section className="section_knowledge">
      <article className="article_knowledge_frontend">
        <h2>Frontend</h2>
        <p>HTML / CSS</p>
        <p>TailwindCSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>GIMP /DaVinci</p>
      </article>
      <article className="article_knowledge_photo">
        <img className="img_knowledge" src="knowledge.png" alt="Graphic" />
      </article>
      <article className="article_knowledge_backend">
        <h2>Backend</h2>
        <p>NodeJS</p>
        <p>SQL</p>
        <p>SQLite3</p>
        <p>Python / Flask</p>
        <p>GIT / Github</p>
      </article>
    </section>
  );
}

export default Knowledge;
