import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  Input,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalWrapper,
  SaveYourScoreContainer,
  TitleContainer,
  TypingSpeedContainer,
} from "../styles/ResultModal.style";
import { H1, H4 } from "../App.style";
import {
  Result,
  addDesktopResultToFirestore,
  addMobileResultToFirestore,
} from "../functions/functions";
import { ColoredSpan } from "../styles/Header.style";

interface ResultModalProps {
  closeModal: () => void;
  wordsPerMinute: number;
  charsPerMinute: number;
  accuracy: number;
}

const ResultModal: React.FC<ResultModalProps> = ({
  closeModal,
  wordsPerMinute,
  charsPerMinute,
  accuracy,
}) => {
  const [name, setName] = useState<string>("");
  const [nameLengthError, setNameLengthError] = useState<boolean>(false);

  const result: Result = {
    name: name,
    WPM: wordsPerMinute,
    CPM: charsPerMinute,
    accuracy: accuracy,
    date: new Date().toISOString(),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length <= 10) {
      if (window.innerWidth > 1000) {
        addDesktopResultToFirestore(result).then(() => {
          closeModal();
        });
      } else {
        addMobileResultToFirestore(result).then(() => {
          closeModal();
        });
      }
    } else {
      setNameLengthError(true);
    }

    return false;
  };

  return (
    <ModalWrapper>
      <ModalOverlay onClick={closeModal}></ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
        <TitleContainer>
          <H1>Your result</H1>
        </TitleContainer>

        <TypingSpeedContainer>
          <H4>
            You type with the speed of{" "}
            <ColoredSpan>{wordsPerMinute} WPM</ColoredSpan>{" "}
            {`(${charsPerMinute} CPM)`}
          </H4>
          <H4>
            Your accuracy was <ColoredSpan>{accuracy}%</ColoredSpan>
          </H4>
        </TypingSpeedContainer>

        <form onSubmit={handleSubmit}>
          <SaveYourScoreContainer>
            <H4>Save your score</H4>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                nameLengthError && setNameLengthError(false);
              }}
              placeholder="your nickname"
              isInvalid={nameLengthError}
              maxLength={10}
            />
            <ButtonContainer>
              <Button type={"submit"}>
                <H4>SAVE</H4>
              </Button>
            </ButtonContainer>
          </SaveYourScoreContainer>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ResultModal;
