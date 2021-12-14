import React from "react";

// import { Container } from './styles';

import contato from "../assets/imagens/contact-pic.jpg";
import about from "../assets/imagens/about-pic.jpg";

function Images() {
  return (
    <>
      <img src={contato} />
      <img src={about} />
    </>
  );
}

export default Images;
