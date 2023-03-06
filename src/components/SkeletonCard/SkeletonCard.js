import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <SkeletonTheme baseColor="#EDE9D5" highlightColor="white">
        <Skeleton height={80} className={styles.headerSkeleton}></Skeleton>
        <div className={styles.contentWrapper}>
          <Skeleton
            count={4}
            height={40}
            className={styles.contentSkeleton}
          ></Skeleton>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCard;
