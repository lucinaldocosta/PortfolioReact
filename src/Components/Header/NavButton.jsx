import React from "react";
import "./HeaderCSS/NavButton.css";

function NavButton({ onData, NavPosition }) {
  // Função para manipular o clique no botão de navegação.
  const handleClickNav = () => {
    // Se NavPosition for nulo ou indefinido, chama onData(true) para abrir o menu, caso contrário, chama onData(false) para fechar o menu.
    if (!NavPosition || NavPosition === null) {
      onData(true);
    } else {
      onData(false);
    }
  };

  return (
    <>
      {/* Componente de botão de navegação */}
      <article onClick={handleClickNav} className="menu_article_nav">
        {/* Ícone do menu aberto */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={
            NavPosition || NavPosition == "null"
              ? "menu_dissapear"
              : "menu_open_nav"
          }
        >
          <path d="M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"></path>
        </svg>
        {/* Ícone do menu fechado */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={
            NavPosition || NavPosition == "null"
              ? "menu_close_nav"
              : "menu_dissapear"
          }
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </article>
    </>
  );
}

export default NavButton;
