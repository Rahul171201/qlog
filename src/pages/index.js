import { useEffect } from "react";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import lato from "@/data/latoFont";

export default function Home() {
  useEffect(() => {
    Router.push("/login");
  }, []);

  return (
    <main className={styles.mainWrapper}>
      <div className={`${styles.loadingWrapper} ${lato.className}`}>
        <div className={styles.loadingText}>Loading</div>
        <div className={styles.iconWrapper}>
          <Image
            src="/images/loading.png"
            alt="loading icon"
            width={100}
            height={100}
            className={styles.icon}
          ></Image>
        </div>
      </div>
    </main>
  );
}
