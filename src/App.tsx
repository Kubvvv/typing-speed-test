import {
  EuiButton,
  EuiFieldNumber,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSelect,
  EuiText,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import Words from "./components/Words";
import { millisToMinutesAndSeconds } from "./functions/functions";

export interface WordState {
  word: string;
  state: "pending" | "fail" | "ok";
}

function App() {
  const [mistake, setMistake] = useState<boolean>(false);

  const [words, setWords] = useState<WordState[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    getWordsFromApi(100);
  }, []);

  const getWordsFromApi = (wordsNumber: number) => {
    fetch(`https://random-word-api.herokuapp.com/word?number=${wordsNumber}`)
      .then((response) => response.json())
      .then((data) => {
        const tempWords: string[] = data;
        const wordsArr = tempWords.map((item): WordState => {
          return { word: item, state: "pending" };
        });
        setWords(wordsArr);
        setLoading(false);
        setTimer(millisToMinutesAndSeconds(selectedTime));
      })
      .catch((error) => console.log(error));
  };

  const handleStartClick = () => {
    getWordsFromApi(100);
  };

  const handleButtonClick = () => {
    // setStart(!start);
    setLoading(true);
  };

  const [timer, setTimer] = useState<string>();

  function setTimeInterval(time: number) {
    setTestStarted(true);
    let timeLeft = time;
    const interval = setInterval(function () {
      timeLeft = timeLeft - 1000;
      const czas = millisToMinutesAndSeconds(timeLeft);
      setTimer(czas);

      if (timeLeft <= time - 10000) {
        clearInterval(interval);
        alert("finish!");
      }
    }, 1000);
  }

  const [testStarted, setTestStarted] = useState<boolean>(false);

  //select logic
  const [selectedTime, setSelectedTime] = useState<number>(60000);
  const optionValues = [60000, 120000, 180000];
  const selectOptions = optionValues.map((time) => {
    return { value: time, text: millisToMinutesAndSeconds(time) };
  });

  const handleNextWord = (mistake: boolean) => {
    const wordsArr = [...words];

    if (mistake) {
      words[wordIndex].state = "fail";
    } else {
      words[wordIndex].state = "ok";
    }
    setWords(wordsArr);

    setWordIndex((w) => w + 1);
  };

  const handleStartTimer = () => {
    if (!testStarted) {
      setTestStarted(true);
      setTimeInterval(selectedTime);
    }
  };

  const handleResetTimer = () => {
    setTestStarted(false);
  };

  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        css={{
          display: "flex",
          width: "100%",
          minHeight: 800,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EuiFlexItem
          id={"title"}
          css={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <EuiText css={{ color: "black" }}>How much time?</EuiText>
          <div>
            <EuiSelect
              css={{ maxWidth: 100 }}
              options={selectOptions}
              value={selectedTime}
              onChange={(e) => setSelectedTime(Number(e.target.value))}
            />
          </div>

          <>
            {loading && words.length > 0 ? (
              <EuiLoadingSpinner size="m" />
            ) : (
              <>
                {words.length && (
                  <>
                    <Words
                      words={words}
                      wordIndex={wordIndex}
                      mistake={mistake}
                    />

                    <Input
                      currentWord={words[wordIndex].word}
                      setMistake={setMistake}
                      handleNextWord={handleNextWord}
                      timer={timer}
                      handleStartTimer={handleStartTimer}
                    />
                  </>
                )}

                {timer}

                {/* <EuiButton onClick={handleRestartTest}>Restart</EuiButton> */}
              </>
            )}
          </>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default App;
