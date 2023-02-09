import styles from "./StatsColumn.module.css";
import StatsCard from "../StatsCard/StatsCard";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import BlankCard from "../BlankCard/BlankCard";

const StatsColumn = (props) => {
  let context = useContext(UserContext);
  let { user, setUser } = context;

  console.log(user.asked.length, "hmm");

  return (
    <div className={styles.columnWrapper}>
      {props.type === "questionColumn" ? (
        user.asked.length === 0 ? (
          <BlankCard
            title="No questions aked yet!"
            content="Start with a question ?"
          ></BlankCard>
        ) : (
          user.asked.map((q) => {
            return (
              <StatsCard
                key={q.id}
                title={q.title}
                decription={q.description}
              ></StatsCard>
            );
          })
        )
      ) : user.answered.length === 0 ? (
        <BlankCard
          title="No questions answered yet!"
          content="Start with an answer ?"
        ></BlankCard>
      ) : (
        user.answered.map((a) => {
          return (
            <StatsCard
              key={a.id}
              title={a.content}
              description={a.content}
            ></StatsCard>
          );
        })
      )}
    </div>
  );
};

export default StatsColumn;
