import styles from "../styles/Ask.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import QuestionForm from "@/components/QuestionForm/QuestionForm";

const Ask = () => {
  // search context
  const { setSearchText } = useContext(SearchContext);

  useEffect(() => {
    setSearchText(undefined);
  }, [setSearchText]);

  return (
    <div className={styles.askWrapper}>
      <Navbar></Navbar>
      <QuestionForm></QuestionForm>
    </div>
  );
};

export default Ask;
