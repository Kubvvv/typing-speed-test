import styled from "styled-components";
import { ColorAdditional, ColorSecondary } from "../App.style";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 800px;
  width: 90%;
  background-color: #fff;

  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10000;

  border: 2px solid black;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const TitleContainer = styled.div`
  margin: 30px 0px;
  width: 80%;
`;

export const TypingSpeedContainer = styled.div`
  margin: 20px 0px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SaveYourScoreContainer = styled.div`
  margin-top: 40px;

  width: 80%;
  min-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface InputProps {
  isInvalid?: boolean;
}

export const Input = styled.input<InputProps>`
  margin: 20px 0px;
  height: 40px;
  width: 60%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${ColorAdditional};
  border: ${({ isInvalid }) =>
    isInvalid ? "2px solid red" : "2px solid black"};
  border-radius: 20px;
  outline: none;

  &:focus {
    border: ${({ isInvalid }) =>
      isInvalid ? "2px solid red" : "2px solid black"};
  }

  @media (min-width: 480px) {
    height: 50px;
  }

  @media (min-width: 640px) {
    height: 60px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 25px 0px;
  width: 50%;

  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 100%;

  border: none;
  border-radius: 20px;

  background: ${ColorSecondary};

  @media (min-width: 480px) {
    height: 50px;
  }
`;
