import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: #000;
  opacity: 0.7;
  z-index: 7;
  display: flex;
  justify-content: center;
  animation: 0.5s ${fadeIn} ease-out;
  animation-fill-mode: forwards;
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const ModalStyles = styled.div`
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
`;

export const ModalContent = styled.div`
  height: auto;
  width: 100%;
  justify-content: center;
`;
