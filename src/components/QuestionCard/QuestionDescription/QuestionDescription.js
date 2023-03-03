import styles from "./QuestionDescription.module.css";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

const QuestionDescription = (props) => {
  return (
    <div id={`description` + props.id} className={styles.questionDescription}>
      {props.q.description}
      {props.q.attachments.map((attachment, index) => {
        return <ImageComponent src={attachment} key={index}></ImageComponent>;
      })}
    </div>
  );
};

export default QuestionDescription;
