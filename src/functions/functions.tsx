import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return {
    minutes: minutes.toString().padStart(2, "0"),
    seconds: remainingSeconds.toString().padStart(2, "0"),
  };
}

export interface Result {
  WPM: number;
  CPM: number;
  Accuracy: number;
  date: string;
}

export const addDesktopResultToFirestore = async (result: Result) => {
  try {
    const docRef = await addDoc(collection(db, "results-desktop"), result);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log(e);
  }
};
