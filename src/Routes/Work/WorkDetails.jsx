import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OverviewDetails from "./Details";
import WorkDetailsTemplate from "./WorkDetailsTemplate";

function WorkDetails() {
  // Usando o hook useParams para obter o parâmetro id da url.
  const { id } = useParams();

  // Usando o estado para armazenar os detalhes do projeto
  const [details, setDetails] = useState({
    id: "",
    overview: "",
    tecnologies: "",
  });

  useEffect(() => {
    // Filtrando os detalhes do projeto com base no id da url.
    const infoDetails = OverviewDetails.filter((item) => item.id === id);
    if (infoDetails[0].id === id) {
      // Definindo os detalhes do projeto no estado.
      setDetails({ ...infoDetails[0] });
    }
    // Rolando para o topo da página quando a página é carregada.
    window.scrollTo(0, 0);
  }, [id]);

  // Função para formatar uma lista a partir de um texto.
  const formtAsList = (text) => {
    const lines = text.split("\n");
    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  };

  // Função para formatar um texto como parágrafo.
  const formtAsParagraph = (text) => {
    const lines = text.split("\n");
    return (
      <article>
        {lines.map((line, index) => (
          <>
            <p key={index}>{line}</p>
            <br />
          </>
        ))}
      </article>
    );
  };

  return (
    <main>
      {/* Renderiza o componente WorkDetailsTemplate com os detalhes do projeto */}
      <WorkDetailsTemplate
        title={id}
        image={`../${id}.png`}
        overview={formtAsParagraph(details.overview)}
        tecnologies={formtAsList(details.tecnologies)}
      />
    </main>
  );
}

export default WorkDetails;
