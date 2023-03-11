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

function App() {
  const [start, setStart] = useState<boolean>(false);

  const [mistake, setMistake] = useState<boolean>(false);

  const [words, setWords] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [wordIndex, setWordIndex] = useState<number>(0);

  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word?number=${selectedValue}`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [start]);

  const handleButtonClick = () => {
    setStart(!start);
    setLoading(true);
  };

  useEffect(() => {
    if (words.length > 0) {
      if (words[wordIndex].startsWith(text)) {
        setMistake(false);
      } else {
        setMistake(true);
      }
    }

    if (text === words[wordIndex]) {
      setWordIndex(wordIndex + 1);
      setText("");
    }
  }, [text]);

  //select logic
  const [selectedValue, setSelctedValue] = useState<number>(10);
  const optionValues = [10, 20, 30, 40];
  const selectOptions = optionValues.map((value) => {
    return { value: value, text: value };
  });

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
          <EuiText css={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
            Typing speed
          </EuiText>

          <EuiText css={{ color: "black" }}>How many words?</EuiText>
          <div>
            <EuiSelect
              css={{ maxWidth: 100 }}
              options={selectOptions}
              value={selectedValue}
              onChange={(e) => setSelctedValue(Number(e.target.value))}
            />
          </div>
          <EuiButton onClick={handleButtonClick} color={"ghost"}>
            {start ? "close" : "start"}
          </EuiButton>

          {start && (
            <>
              {loading ? (
                <EuiLoadingSpinner size="m" />
              ) : (
                <>
                  <Words
                    words={words}
                    wordIndex={wordIndex}
                    mistake={mistake}
                  />

                  <EuiFieldText
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </>
              )}
            </>
          )}
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default App;
