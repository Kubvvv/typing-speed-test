import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexItem,
  EuiIcon,
  EuiText,
} from "@elastic/eui";
import React, { useEffect, useState } from "react";

interface InputProps {
  currentWord: string;
  setMistake: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextWord: (mistake: boolean) => void;
  timer?: string;
  handleStartTimer: () => void;
}

const Input: React.FC<InputProps> = ({
  currentWord,
  setMistake,
  handleNextWord,
  timer,
  handleStartTimer,
}) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (text !== "") {
      if (currentWord.startsWith(text)) {
        setMistake(false);
      } else {
        setMistake(true);
      }
    }

    if (text === "") {
      setMistake(false);
    }
  }, [text]);

  const [correctWords, setCorrectWords] = useState<number>(0);
  const [wrongWords, setWrongWords] = useState<number>(0);

  const handleSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 32 && text.length > 0) {
      console.log(text);
      console.log(currentWord);
      if (text === currentWord) {
        setCorrectWords((w) => w + 1);
        handleNextWord(false);
      } else {
        setWrongWords((w) => w + 1);
        handleNextWord(true);
      }

      setText("");
    }
  };

  useEffect(() => {
    if (text === " ") {
      setText("");
      setMistake(false);
    }
  }, [text]);

  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const handleTimerClick = () => {
    setIsTimerVisible((timer) => !timer);
  };

  useEffect(() => {
    if (text.length > 0 && text !== " ") {
      handleStartTimer();
    }
  }, [text]);

  return (
    <>
      <EuiFlexItem style={{ flexDirection: "row", gap: 20 }}>
        <EuiText>Correct: {correctWords}</EuiText>
        <EuiText>Wrong: {wrongWords}</EuiText>
      </EuiFlexItem>

      <EuiFlexItem
        style={{
          flexDirection: "row",
          gap: 20,
          width: 500,
        }}
      >
        <EuiFieldText
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleSpace}
        />
        <EuiFlexItem
          style={{
            justifyContent: "center",
            alignItems: "center",
            background: "#6a6161",
            borderRadius: 5,
            minWidth: 50,
          }}
          onClick={handleTimerClick}
        >
          {isTimerVisible ? timer : ""}
        </EuiFlexItem>
        <EuiButton onClick={() => alert("hej")}>
          <EuiIcon type={"refresh"} size={"m"} />
        </EuiButton>
      </EuiFlexItem>
    </>
  );
};

export default Input;
