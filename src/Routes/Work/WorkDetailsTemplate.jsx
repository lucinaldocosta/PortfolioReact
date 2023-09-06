import React from "react";
import { Link } from "react-router-dom";
import "./WorkCSS/WorkDetailsTemplate.css";

function WorkDetailsTemplate(props) {
  return (
    <section className="section_work_details_template">
      {/* Seção de descrição do projeto */}
      <article className="article_work_details_template_description">
        <h2>{props.title}</h2>
        <p>
          This page showcases the {props.title} project, encompassing a
          comprehensive Project Overview, insights into the Tools Used, and a
          captivating snapshot of the homepage.
        </p>
      </article>

      {/* Seção de imagem do projeto */}
      <article className="article_work_details_template_img">
        <img src={props.image} alt={props.title} />
      </article>

      {/* Seção de visão geral do projeto */}
      <article className="article_work_details_template_text">
        <h3>Project Overview</h3>
        {props.overview}
      </article>

      {/* Seção de tecnologias utilizadas no projeto */}
      <article className="article_work_details_template_tools">
        <h3>Tecnologies Utilized:</h3>
        {props.tecnologies}
      </article>

      {/* Botão Go Back que leva de volta á página de trabalhos */}
      <article className="article_work_details_template_go_back">
        <Link to="/work">
          <button className="button_work_details_template_go_back">
            Go Back
          </button>
        </Link>
      </article>
    </section>
  );
}

export default WorkDetailsTemplate;
