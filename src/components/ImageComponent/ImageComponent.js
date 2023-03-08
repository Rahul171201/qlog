import styles from "./ImageComponent.module.css";
import Image from "next/image";
import { memo } from "react";

const ImageComponent = (props) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={props.src}
        alt="image"
        width={300}
        height={300}
        className={styles.image}
      ></Image>
    </div>
  );
};

export default memo(ImageComponent);
