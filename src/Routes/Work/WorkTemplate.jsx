import React from "react";
import { Link } from "react-router-dom";
import "./WorkCSS/WorkTemplate.css";

function WorkTemplate(props) {
  return (
    <section className="section_work_template">
      {/* Seção de imagem do projeto */}
      <article className="article_image_work_template">
        <img src={props.image} alt={props.title} />
      </article>

      {/* Seção de texto do projeto */}
      <article className="article_text_work_template">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        {/* Link para a página de detalhes do projeto */}
        <Link className="work_links" to={`/work/${props.title}`}>
          <button>More Details</button>
        </Link>
      </article>
    </section>
  );
}

export default WorkTemplate;
