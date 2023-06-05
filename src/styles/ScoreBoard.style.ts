import styled from "styled-components";
import { ColorSecondary, ColorAdditional } from "../App.style";

export const ScoreBoardContainer = styled.div`
  margin-top: 100px;

  width: 90%;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SwitchContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  border-radius: 17px;
  padding: 2px;
  height: 40px;
  width: 40%;
  min-width: 280px;
  max-width: 320px;

  position: relative;

  background: #f5f5f5;
`;

interface SwitchProps {
  selected: boolean;
}

export const Slider = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  background: ${ColorSecondary};
  border-radius: 15px;
  transition: left 0.2s ease-in-out, right 0.2s ease-in-out;
  z-index: 0;
`;

export const SwitchOption = styled.div<SwitchProps>`
  flex: 1;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) =>
    selected ? ColorSecondary : "transparent"};

  font-family: "Montserrat", sans-serif;
  border-radius: 17px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 35px;

  &:hover {
    transform: ${({ selected }) => (selected ? "none" : "scale(1.05)")};
  }
`;

//table

export const Table = styled.div`
  width: 95%;

  max-width: 700px;

  margin-top: 70px;

  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const TableRowContainer = styled.div`
  width: 100%;

  min-width: 280px;

  display: flex;
  align-items: center;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;

  overflow: hidden;
  flex-wrap: nowrap;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface TablePositionProps {
  top: boolean;
}

export const Position = styled.div<TablePositionProps>`
  width: 20%;

  color: ${(props) => (props.top ? ColorSecondary : ColorAdditional)};
`;

export const Nickname = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  height: 60px;

  background: #f5f5f5;
  border-radius: 60px;
  margin: 10px 0px;

  margin-left: 20px;

  @media (max-width: 640px) {
    height: 50px;
    margin-left: 10px;
  }
  @media (max-width: 400px) {
    height: 40px;
    margin-left: 5px;
  }
`;

export const RightContainer = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-evenly;

  position: relative;
`;

export const StatisticHeader = styled.div`
  position: absolute;
  top: -25px;
  min-width: 56px;
`;

export const Statistic = styled.div`
  height: 60px;
  width: 100px;

  @media (max-width: 640px) {
    height: 50px;
    width: 60px;
  }

  @media (max-width: 400px) {
    height: 40px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f5f5f5;
  border-radius: 60px;
`;
