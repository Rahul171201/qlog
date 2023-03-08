import styles from "./Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";
import lato from "@/data/latoFont";
import useLocalStorage from "@/hooks/useLocalStorage";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import AnswerForm from "@/components/AnswerForm/AnswerForm";

const AddAnswer = ({ qId }) => {
  // questions context
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  const question = questions.get(+qId);

  return (
    <div className={`${styles.answerWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.questionWrapper}>
        <div className={styles.questionTitle}>{question.title}</div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>
          {question.description}
          {question.attachments.map((attachment, index) => {
            return (
              <ImageComponent key={index} src={attachment}></ImageComponent>
            );
          })}
        </div>
        <div className={styles.infoBar}>
          <span>{question.ownerName}</span>
        </div>
        <AnswerForm qId={qId}></AnswerForm>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  return {
    props: {
      qId: params.qid,
    },
  };
}

export default AddAnswer;
