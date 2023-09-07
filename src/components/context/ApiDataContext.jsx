import React, { createContext, useContext, useState } from "react";

const ApiDataContext = createContext();

export function useApiData() {
  return useContext(ApiDataContext);
}

export function ApiDataProvider({ children }) {
  const [apiData, setApiData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue }),
    })
      .then((response) => response.json())
      .then((json) => {
        setApiData(json);
        console.log(json,"jsooon");
      });
  };

  return (
    <ApiDataContext.Provider
      value={{ apiData, fetchApiData, inputValue, setInputValue }}
    >
      {children}
    </ApiDataContext.Provider>
  );
}
