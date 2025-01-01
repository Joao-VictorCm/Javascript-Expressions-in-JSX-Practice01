//Crie um aplicativo react do zero.
//Deve exibir elementos HTML de 2 parágrafos.
//Os parágrafos devem dizer:
//Criado por SEUNOME.
//Direitos autorais CURRENTYEAR.
//Por exemplo.
//Criado por Angela Yu.
//Direitos autorais 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "João";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Criado por {name}</h1>
    <p>Direitos autorais {year}</p>
  </div>,

  document.getElementById("root")
);
