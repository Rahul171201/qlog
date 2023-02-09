import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    Router.push("/login");
  }, []);

  return <main>404 page not found</main>;
}
