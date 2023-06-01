import React from "react";
import { H2, H1 } from "../App.style";
import {
  TimerContainer,
  HeaderContainer,
  ColoredSpan,
} from "../styles/Header.style";

interface HeaderProps {
  minutes: string;
  seconds: string;
}

const Header: React.FC<HeaderProps> = ({ minutes, seconds }) => {
  return (
    <>
      <TimerContainer>
        <H2>
          {minutes}:<ColoredSpan>{seconds}</ColoredSpan>
        </H2>
      </TimerContainer>

      <HeaderContainer>
        <H1>
          TEST YOUR <ColoredSpan>TYPING</ColoredSpan> SKILLS
        </H1>
      </HeaderContainer>
    </>
  );
};

export default Header;
