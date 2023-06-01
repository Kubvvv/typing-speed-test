import React from "react";
import { H2, H5 } from "../App.style";
import {
  StatisticsContainer,
  Statistic,
  NumberBox,
} from "../styles/Statistics.style";

interface StatisticsProps {
  wordsPerMinute: number;
  charsPerMinute: number;
  accuracy: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  wordsPerMinute,
  charsPerMinute,
  accuracy,
}) => {
  return (
    <StatisticsContainer>
      <Statistic>
        <NumberBox>
          <H2>{wordsPerMinute}</H2>
        </NumberBox>
        <H5>words/min</H5>
      </Statistic>
      <Statistic>
        <NumberBox>
          <H2>{charsPerMinute}</H2>
        </NumberBox>
        <H5>chars/min</H5>
      </Statistic>
      <Statistic>
        <NumberBox>
          <H2>{accuracy}</H2>
        </NumberBox>
        <H5>% accuracy</H5>
      </Statistic>
    </StatisticsContainer>
  );
};

export default Statistics;
