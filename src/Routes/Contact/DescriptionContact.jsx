import React from "react";
import { saveAs } from "file-saver";
import CV_Lucinaldo from "/public/CV_Lucinaldo.pdf";
import "./ContactCSS/DescriptionContact.css";

function DescriptionContact() {
  // Função para lidar com o download do currículo.
  const handleDownload = () => {
    // Utiliza a bibliotecaa file-saver para iniciar o download do currículo.
    saveAs(CV_Lucinaldo, "Lucinaldo_CV.pdf");
  };

  return (
    <section className="section_description_contact">
      <article className="article_description_contact">
        <h2>Let´s make something great!</h2>
        <h5>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to bring my collective
          design experience to the table where we can work together to solve
          real business-problems in a way that optimizes all of our respective
          experience and knowledge.
        </h5>
        <button onClick={handleDownload} className="button_download_CV">
          Download CV
        </button>
      </article>
    </section>
  );
}

export default DescriptionContact;
