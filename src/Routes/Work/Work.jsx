import React, { useEffect } from "react";
import WorkTemplate from "./WorkTemplate";
import "./WorkCSS/Work.css";

function Work() {
  // Este useEffect é usado para rolar para o topo da página quando a página é carregada.
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="main_work">
      <h2 className="main_h2_work">Works</h2>
      <p className="main_p_work">
        Discover some of the client projects that showcase my experience across
        a variety of technologies and tools. Click on 'More Details' to delve
        into the specific technologies used in each project.
      </p>
      <WorkTemplate
        title="ChatWeb"
        description="Here, conversations come to life uniquely. Driven by my desire to provide exceptional interactions, ChatWeb is a space where words transform into meaningful connections. Join us to explore a realm of captivating dialogues and unparalleled online experiences — all on a single platform"
        image="./ChatWeb.png"
      />
      <WorkTemplate
        title="DrinksPortals"
        description="Welcome to DrinksPortals: A testament to my creative drive, this online beverage emporium reflects my dedication to crafting unique experiences. Inspired by the desire to offer something extraordinary, DrinksPortals is a destination where the world of beverages unfolds, inviting enthusiasts to explore a realm of unparalleled flavors and choices in every sip."
        image="./DrinksPortals.png"
      />
      <WorkTemplate
        title="EuforiaChick"
        description="Introducing EuforiaChick: A standout creation of mine, an online shoe store that encapsulates my passionate approach to design and innovation. Inspired by the pursuit of delivering something distinct, EuforiaChick is a showcase where fashion comes to life, providing style enthusiasts a space to explore unparalleled elegance in every pair."
        image="./EuforiaChick.png"
      />
    </main>
  );
}

export default Work;
