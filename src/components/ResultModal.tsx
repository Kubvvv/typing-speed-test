import React from "react";
import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalWrapper,
} from "../styles/ResultModal.style";
import { H2 } from "../App.style";
import { Result, addDesktopResultToFirestore } from "../functions/functions";

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
  const result: Result = {
    WPM: wordsPerMinute,
    CPM: charsPerMinute,
    Accuracy: accuracy,
    date: new Date().toISOString(),
  };

  return (
    <ModalWrapper>
      <ModalOverlay onClick={closeModal}></ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
        <div>
          <H2>WPM: {wordsPerMinute}</H2>
          <H2>CPM: {charsPerMinute}</H2>
          <H2>Accuracy: {accuracy}</H2>
          {/* <button
            style={{ width: 50, height: 30 }}
            onClick={() => addDesktopResultToFirestore(result)}
          >
            {" "}
            add result{" "}
          </button> */}
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ResultModal;
