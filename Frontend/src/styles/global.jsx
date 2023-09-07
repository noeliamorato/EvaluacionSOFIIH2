import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const colorChange = keyframes`
  0% {
    color: #225859;
  }
  50% {
    color: #202020;
  }
  100% {
    color: #225859;
  }
`;

export const Padre = styled.article`
  width: 90%;
  margin: 2.5em auto;

  & > div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2.5em 0;

    & h1 {
      font-size: 1.5em;
      margin-bottom: 0.5em;
      text-align: center;
      color: #069266; 
    }

    & p {
      font-size: 1.2em; 
      margin-bottom: 0.5em;
      text-align: center;
      color: #333;
    }

    & button {
      height: 2.5em; /* Cambio: Mayor altura para el botón */
      width: 7em; /* Cambio: Mayor ancho para el botón */
      border: none;
      font-size: 1em; /* Cambio: Tamaño de fuente aumentado */
      background-color: #069266; /* Cambio: Color que combina con el Navbar */
      color: #fff; /* Cambio: Texto en color blanco */
      text-transform: uppercase;
      margin: 0 auto;
      cursor: pointer;
      transition: all 0.3s ease; /* Cambio: Reducción de duración de transición */
      &:hover {
        background-color: #225859; /* Cambio: Color de fondo al pasar el ratón */
      }
    }
  }

  & table {
    margin: 1em auto;
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: auto;
    border-collapse: collapse;
    position: relative;

    & th {
      font-size: 1.2em; /* Cambio: Tamaño de fuente aumentado */
      font-weight: bold; /* Cambio: Fuente en negrita */
      padding: 1em 0;
      background-color: #069266; /* Cambio: Color que combina con el Navbar */
      color: #fff; /* Cambio: Texto en color blanco */
    }

    & tr {
      border: solid 1px #0002;
      &:nth-child(2n) {
        background-color: #069266; /* Cambio: Color de fondo alternado */
        color: #fff; /* Cambio: Texto en color blanco */
      }
      &:hover {
        background-color: #225859;
        color: #fff;
        transform: scale(1.02); /* Cambio: Reducción de la escala al pasar el ratón */
        transition: all 0.3s ease; /* Cambio: Reducción de duración de transición */
        box-shadow: 0 0px 8px 4px #0005;
        & > td {
          color: #fff;
        }
        & button {
          color: #fff;
        }
      }
    }

    & td {
      color: #333; /* Cambio: Color de texto más oscuro */
      font-weight: normal; /* Cambio: Fuente en normal */
      font-size: 1em;
      padding: 1em 0;
      text-align: center;
      border-collapse: collapse;
      &:nth-child(1) {
        padding: 0 1.5em;
      }
    }

    & tbody {
      display: block;
    }

    & tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    & tbody button {
      background-color: transparent;
      border: none;
      margin: 0 0.5em;
      color: #069266; /* Cambio: Color que combina con el Navbar */
      cursor: pointer;
    }
  }
`;
