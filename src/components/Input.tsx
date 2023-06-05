import React from "react";
import cursorSvg from "../assets/CursorSvg.svg";
import { H4 } from "../App.style";
import { TypedWord } from "../App";
import {
  InputContainer,
  UserInput,
  Cursor,
  LeftContainer,
  RightContainer,
} from "../styles/Input.style";

interface InputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  mistake: boolean;
  handleSpace: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  typedWords: TypedWord[];
  remainingPart: string;
  currentWordIndex: number;
  words: string[];
}

const Input: React.FC<InputProps> = ({
  text,
  setText,
  handleSpace,
  words,
  typedWords,
  remainingPart,
  mistake,
  currentWordIndex,
}) => {
  return (
    <InputContainer>
      <UserInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSpace}
        autoCapitalize="off"
        autoCorrect="off"
        autoFocus
      />
      <Cursor src={cursorSvg} />
      <LeftContainer>
        {typedWords.map((word, index) => (
          <H4
            key={index}
            style={{
              color: "grey",
              textDecoration: word.correct ? "none" : "line-through",
              paddingRight: 5,
            }}
          >
            {word.text}
          </H4>
        ))}
        <H4
          style={{
            color: "blue",
            textDecoration: mistake ? "line-through" : "none",
          }}
        >
          {text}
        </H4>
      </LeftContainer>
      <RightContainer>
        <H4 style={{ paddingRight: 5 }}>{remainingPart}</H4>
        {words.slice(currentWordIndex + 1).map((word, index) => (
          <H4 style={{ paddingRight: 5 }} key={index}>
            {word}
          </H4>
        ))}
      </RightContainer>
    </InputContainer>
  );
};

export default Input;
