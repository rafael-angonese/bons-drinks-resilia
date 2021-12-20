import React from "react";

// import { Container } from './styles';

import contato from "../assets/imagens/contact-pic.jpg";
import about from "../assets/imagens/about-pic.jpg";

function Images() {
  return (
    <>
      <img alt="contato" src={contato} />
      <img alt="about" src={about} />
    </>
  );
}

export default Images;
