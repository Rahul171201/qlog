import "@/styles/globals.css";
import UserContextProvider from "@/contexts/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
