import { between } from "polished";
import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 80px;

  height: 100px;

  width: 90%;
  max-width: 900px;

  display: flex;
  position: relative;
  overflow: hidden;

  border: 2px solid black;
  border-radius: 20px;
`;

export const UserInput = styled.input`
  position: absolute;
  background: transparent;
  border: none;
  height: 100%;
  color: transparent;
  left: 50%;
  font-size: 40px;
  outline: none;

  caret-color: transparent;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const Cursor = styled.img`
  position: absolute;
  left: 49%;
  top: 10%;
  z-index: 0;
  animation: 1s blink step-end infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const LeftContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;

  align-items: center;

  display: flex;
  justify-content: flex-end;
`;

export const RightContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;

  padding-left: ${between("5px", "9px", "1000px", "320px")};
`;
