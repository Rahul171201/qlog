import styles from "./ToolTip.module.css";
import { useState } from "react";
import Image from "next/image";

const ToolTip = () => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <Image
        src="/images/editing.png"
        alt="edit profile"
        width={20}
        height={20}
      ></Image>
      {showToolTip ? <div className={styles.toolTip}>Edit Profile</div> : <></>}
    </div>
  );
};

export default ToolTip;
