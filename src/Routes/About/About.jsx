import React from "react";
import Presentation from "./Presentation";
import Certificates from "./Certificates";
import Knowledge from "./Knowledge";

function About() {
  return (
    <main style={{ background: "rgba(240, 240, 240, 0.8)" }}>
      <Presentation />
      <Knowledge />
      <Certificates />
    </main>
  );
}

export default About;
