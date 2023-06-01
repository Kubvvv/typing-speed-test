import { useEffect, useState } from "react";

const useFetchRandomWords = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchWords = async (wordLength: number, numOfWords: number) => {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1000"
      );
      const words = await response.json();
      return words
        .filter((word: string) => word.length === wordLength)
        .slice(0, numOfWords);
    };

    const shuffleArray = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const getAllWords = async () => {
      const twoLetterWords = await fetchWords(2, 50);
      const threeLetterWords = await fetchWords(3, 200);
      const fourLetterWords = await fetchWords(4, 200);
      const fiveLetterWords = await fetchWords(5, 200);
      const sixLetterWords = await fetchWords(6, 100);

      const allWords = [
        ...twoLetterWords,
        ...threeLetterWords,
        ...fourLetterWords,
        ...fiveLetterWords,
        ...sixLetterWords,
      ];
      return shuffleArray(allWords);
    };

    if (isMounted) {
      getAllWords().then((words) => {
        setData(words);
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};

export default useFetchRandomWords;
