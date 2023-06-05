import styled from "styled-components";
import { ColorSecondary } from "../App.style";

export const TimerContainer = styled.div`
  margin: 35px 0px;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  margin: 35px 0px;
  width: 90%;

  text-align: center;
`;

export const ColoredSpan = styled.span`
  color: ${ColorSecondary};
`;
