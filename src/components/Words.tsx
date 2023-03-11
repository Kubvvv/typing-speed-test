import { EuiFlexGroup, EuiText } from "@elastic/eui";
import React, { useEffect, useState } from "react";

interface WordsProps {
  words: string[];
  wordIndex: number;
  mistake: boolean;
}

const Words: React.FC<WordsProps> = ({ wordIndex, words, mistake }) => {
  return (
    <EuiFlexGroup
      css={{
        display: "flex",
        maxWidth: "70%",
        flexDirection: "row",
        gap: 10,
        background: "white",
        flexWrap: "wrap",
        color: "black",
      }}
    >
      {words.map((word, i) => {
        if (wordIndex === i && mistake) {
          return <EuiText css={{ background: "red" }}>{word}</EuiText>;
        } else {
          return (
            <EuiText
              css={{
                background: i === wordIndex ? "gray" : "white",
                color: wordIndex > i ? "green" : "black",
              }}
            >
              {word}
            </EuiText>
          );
        }
      })}
    </EuiFlexGroup>
  );
};

export default Words;
