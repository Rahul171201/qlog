import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export default function Home() {
  let { user, setUser } = useContext(UserContext);

  return <main>{user.userName}</main>;
}
