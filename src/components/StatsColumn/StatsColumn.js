import styles from "./StatsColumn.module.css";
import StatsCard from "../StatsCard/StatsCard";

const StatsColumn = () => {
  return (
    <div className={styles.columnWrapper}>
      <StatsCard></StatsCard>
      <StatsCard></StatsCard>
      <StatsCard></StatsCard>
      <StatsCard></StatsCard>
    </div>
  );
};

export default StatsColumn;
