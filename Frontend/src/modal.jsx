import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <article>
            <section>
              <p>{titulo}</p>
              <button onClick={() => setOpenModal(false)}>X</button>
            </section>
            <article>{contenido}</article>
        </article>
      </DivModalContainer>
    );
};

export default Modal;

const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #0009;
  & article {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display:flex;
    flex-direction:column;
    padding:1em;
    width:25em;
    & section{
      display:flex;
      justify-content:space-around;
      padding:1em;
      & button{
        border-radius:50%;
        width:20px;
        height:20px;
        border:none;
        cursor: pointer;
        background-color:#060359c3;
        color:#fff;
      }
    }
    & > article{
      width:100%;
      display:flex;
      gap:1em ;
     & div{
      display:flex;
      gap:1em ;
      & label{
        width:30%;

      }
      & input , select{
        padding:.5em ;
        width:60%;
        background-color:transparent;
        border:none;
        border-bottom:solid 1px #0005;
      
      }
      & button{
        border:none;
        padding:.3em 2em;
        background-color:#060359c3;
        color:#fff;
        border-radius:1em;
        cursor: pointer;
        margin-top:2em;
      }
     }
    }
  }
`;
