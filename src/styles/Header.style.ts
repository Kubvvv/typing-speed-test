import styled from "styled-components";
import { ColorSecondary } from "../App.style";

export const TimerContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  text-align: center;
`;

export const ColoredSpan = styled.span`
  color: ${ColorSecondary};
`;
