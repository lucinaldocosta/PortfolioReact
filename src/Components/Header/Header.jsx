import React, { useState } from "react";
import LogoHeader from "./LogoHeader";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
import "./HeaderCSS/Header.css";

function Header() {
  // Define um estado chamado dataFromNav para controlar a posição do menu de navegação.
  const [dataFromNav, setDataFromNav] = useState(null);

  // Função para atualizar o estado dataFromNav com base no valo pasado como argumento.
  const handleDataFromNav = (data) => {
    setDataFromNav(data);
  };

  return (
    <header>
      <nav className="nav_header">
        <section className="section_nav_header">
          {/* Componente do logotipo */}
          <LogoHeader />

          {/* Componente do botão de navegação */}
          <NavButton NavPosition={dataFromNav} onData={handleDataFromNav} />
        </section>

        <section
          className={
            dataFromNav === null
              ? "header_null"
              : dataFromNav
              ? "header_true"
              : "header_false"
          }
        >
          {/* Componente das links de navegação */}
          <NavLinks NavPosition={dataFromNav} onData={handleDataFromNav} />

          {/* Componente das redes sociais */}
          <NavSocial NavPosition={dataFromNav} />
        </section>
      </nav>
    </header>
  );
}

export default Header;
