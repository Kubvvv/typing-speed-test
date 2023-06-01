import { useEffect, useState } from "react";
import { MainContainer, ContentContainer } from "./App.style";
import TimeAndStats from "./components/Statistics";
import useFetchRandomWords from "./functions/useFetchRandomWords";
import Input from "./components/Input";
import Header from "./components/Header";
import { formatTime } from "./functions/functions";
import ResultModal from "./components/ResultModal";

export interface WordState {
  word: string;
  state: "pending" | "fail" | "ok";
}

export interface TypedWord {
  text: string;
  correct: boolean;
}

function App() {
  const words = useFetchRandomWords();

  //statistics
  const [wordsPerMinute, setWordsPerMinute] = useState<number>(0);
  const [charsPerMinute, setCharsPerMinute] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);

  const [text, setText] = useState<string>("");
  const [typedWords, setTypedWords] = useState<TypedWord[]>([]);
  const [remainingPart, setRemainingPart] = useState(words[0] || "");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    setRemainingPart(words[0]);
  }, [words]);

  useEffect(() => {
    if (typedWords.length > 0) {
      const correctCount = typedWords.filter((item) => item.correct).length;
      const totalCount = typedWords.length;

      const accuracy = correctCount / totalCount;

      const accuracyPercentage = accuracy * 100;

      setAccuracy(Math.round(accuracyPercentage));
    }
  }, [typedWords]);

  const [shouldRunEffect, setShouldRunEffect] = useState<boolean>(true);
  const [mistake, setMistake] = useState<boolean>(false);

  useEffect(() => {
    //starts timer if user typed something
    if (!hasStarted && text.length > 0) {
      setHasStarted(true);
    }

    if (!shouldRunEffect) return;

    if (text.length > 0)
      if (words[currentWordIndex].startsWith(text)) {
        setMistake(false);
        setRemainingPart(remainingPart.substring(1));
      } else {
        setMistake(true);
      }

    if (text === " ") {
      setText("");
      setMistake(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, shouldRunEffect]);

  const handleSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && text.length > 0) {
      const isCorrect = words[currentWordIndex] === text;
      setTypedWords([...typedWords, { text: text, correct: isCorrect }]);

      if (isCorrect) {
        setWordsPerMinute(wordsPerMinute + 1);
        setCharsPerMinute(charsPerMinute + text.length);
      }

      setText("");
      setCurrentWordIndex((prevIndex) => prevIndex + 1);

      if (currentWordIndex < words.length - 1) {
        setRemainingPart(words[currentWordIndex + 1]);
      }
    } else if (e.key === "Backspace" && text.length > 0) {
      setShouldRunEffect(false);
      const lastLetter = text[text.length - 1];
      const newWord = lastLetter + remainingPart;
      if (words[currentWordIndex].startsWith(text)) {
        setRemainingPart(newWord);
      }
    } else {
      setShouldRunEffect(true);
    }
  };

  //timer logic

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    if (hasStarted && timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (timeLeft === 0) {
      openResultModal();
    }
  }, [timeLeft, hasStarted]);

  const { minutes, seconds } = formatTime(timeLeft);

  //result logic
  const [isResultModalVisible, setIsResultModalVisible] =
    useState<boolean>(false);
  const openResultModal = () => setIsResultModalVisible(true);
  const closeResultModal = () => setIsResultModalVisible(false);

  let resultModal;
  if (isResultModalVisible) {
    resultModal = (
      <ResultModal
        closeModal={closeResultModal}
        wordsPerMinute={wordsPerMinute}
        charsPerMinute={charsPerMinute}
        accuracy={accuracy}
      />
    );
  }

  return (
    <MainContainer>
      {resultModal}
      <ContentContainer>
        <Header minutes={minutes} seconds={seconds} />

        <TimeAndStats
          wordsPerMinute={wordsPerMinute}
          charsPerMinute={charsPerMinute}
          accuracy={accuracy}
        />

        <Input
          text={text}
          setText={setText}
          handleSpace={handleSpace}
          words={words}
          typedWords={typedWords}
          remainingPart={remainingPart}
          mistake={mistake}
          currentWordIndex={currentWordIndex}
        />
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
