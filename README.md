# Javascript-Expressions-in-JSX-Practice01
Created with CodeSandbox

Este projeto é um exemplo básico de um aplicativo React criado do zero. Ele exibe dois elementos HTML: um título e um parágrafo com informações dinâmicas sobre o criador e o ano atual.

## Funcionalidades

- Renderiza dois elementos HTML:
- Um título com o nome do criador.
- Um parágrafo indicando os direitos autorais com o ano atual.
- Demonstra o uso de variáveis dinâmicas em React para preencher os valores exibidos.


## Código do Projeto

``` javascript 

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
