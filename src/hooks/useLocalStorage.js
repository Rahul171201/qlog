const { useState, useEffect } = require("react");

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    } else {
      return (
        new Map(JSON.parse(window.localStorage.getItem(key))) || initialValue
      );
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      key,
      JSON.stringify(Array.from(value.entries()))
    );
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
