import React, { useEffect, useState } from "react";
import { H1, H5, H6 } from "../App.style";
import {
  ScoreBoardContainer,
  SwitchContainer,
  Slider,
  SwitchOption,
  Table,
  TableRowContainer,
  Nickname,
  RightContainer,
  StatisticHeader,
  Statistic,
  LeftContainer,
} from "../styles/ScoreBoard.style";
import {
  Result,
  getTopDesktopResults,
  getTopMobileResults,
} from "../functions/functions";

const ScoreBoard = () => {
  const [results, setResults] = useState<Result[]>([]);

  const [selectedOption, setSelectedOption] = useState<"desktop" | "mobile">(
    "desktop"
  );

  const handleOptionClick = (option: "desktop" | "mobile") => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (selectedOption === "desktop") {
        const topDesktopResults = await getTopDesktopResults();
        setResults(topDesktopResults);
      } else {
        const topMobileResults = await getTopMobileResults();
        setResults(topMobileResults);
      }
    };

    fetchResults();
  }, [selectedOption]);

  return (
    <ScoreBoardContainer>
      <H1>SCORE BOARD</H1>

      <SwitchContainer>
        <Slider
          style={{
            left: selectedOption === "desktop" ? "4px" : "50%",
            right: selectedOption === "desktop" ? "50%" : "4px",
          }}
        />
        <SwitchOption
          selected={selectedOption === "desktop"}
          onClick={() => handleOptionClick("desktop")}
        >
          Desktop
        </SwitchOption>
        <SwitchOption
          selected={selectedOption === "mobile"}
          onClick={() => handleOptionClick("mobile")}
        >
          Mobile
        </SwitchOption>
      </SwitchContainer>

      <Table>
        {results.map((row, i) => {
          return (
            <TableRowContainer key={`row-${row.name}-${i}`}>
              <LeftContainer>
                <H1>{i + 1}</H1>
                <Nickname>
                  <H5>{row.name}</H5>
                </Nickname>
              </LeftContainer>
              <RightContainer>
                <Statistic>
                  <H5>{row.WPM}</H5>
                  <StatisticHeader>
                    {i === 0 && <H6>words/min</H6>}
                  </StatisticHeader>
                </Statistic>
                <Statistic>
                  <H5>{row.CPM}</H5>
                  <StatisticHeader>
                    {i === 0 && <H6>chars/min</H6>}
                  </StatisticHeader>
                </Statistic>
                <Statistic>
                  <H5>{row.accuracy}%</H5>
                  <StatisticHeader>
                    {i === 0 && <H6>% accuracy</H6>}
                  </StatisticHeader>
                </Statistic>
              </RightContainer>
            </TableRowContainer>
          );
        })}
      </Table>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
