import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
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
  name: string;
  WPM: number;
  CPM: number;
  accuracy: number;
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

export const addMobileResultToFirestore = async (result: Result) => {
  try {
    const docRef = await addDoc(collection(db, "results-mobile"), result);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log(e);
  }
};

const desktopResultsCollectionRef = collection(db, "results-desktop");

export const getTopDesktopResults = async () => {
  const postsQuery = query(
    desktopResultsCollectionRef,
    orderBy("WPM", "desc"),
    limit(10)
  );
  const data = await getDocs(postsQuery);

  const result = data.docs.map((doc) => ({ ...doc.data() }));

  return result as Result[];
};

const mobileResultsCollectionRef = collection(db, "results-mobile");

export const getTopMobileResults = async () => {
  const postsQuery = query(
    mobileResultsCollectionRef,
    orderBy("WPM", "desc"),
    limit(10)
  );
  const data = await getDocs(postsQuery);

  const result = data.docs.map((doc) => ({ ...doc.data() }));

  return result as Result[];
};
