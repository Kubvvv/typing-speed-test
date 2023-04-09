import { EuiFlexGroup, EuiText } from "@elastic/eui";
import React from "react";
import { WordState } from "../App";

interface WordsProps {
  words: WordState[];
  wordIndex: number;
  mistake: boolean;
}

const Words: React.FC<WordsProps> = ({ wordIndex, words, mistake }) => {
  return (
    <EuiFlexGroup
      style={{
        maxWidth: "70%",
        flexDirection: "row",
        gap: 10,
        background: "white",
        flexWrap: "wrap",
        color: "black",
        padding: 10,
      }}
    >
      {words.map((word, i) => {
        if ((wordIndex === i && mistake) || word.state === "fail") {
          return (
            <EuiText key={`wrong-${i}`} style={{ background: "red" }}>
              {word.word}
            </EuiText>
          );
        } else {
          return (
            <EuiText
              key={`good-${i}`}
              style={{
                background: i === wordIndex ? "gray" : "white",
                color: word.state === "ok" ? "green" : "black",
              }}
            >
              {word.word}
            </EuiText>
          );
        }
      })}
    </EuiFlexGroup>
  );
};

export default Words;
