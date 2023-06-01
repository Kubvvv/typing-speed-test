import styled from "styled-components";

export const StatisticsContainer = styled.div`
  margin-top: 50px;

  width: 80%;
  min-width: 280px;
  max-width: 430px;

  display: flex;
  justify-content: space-around;
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;

export const NumberBox = styled.div`
  width: 95px;
  height: 95px;

  border: 2px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;

  margin-bottom: 8px;

  @media (max-width: 640px) {
    width: 80px;
    height: 80px;
  }
`;
