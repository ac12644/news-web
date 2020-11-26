

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsSports = createContext();

export const NewsSportsProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=09a334ba3fbe41acaff79515476dc4cc`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsSports.Provider value={{ data }}>
      {props.children}
    </NewsSports.Provider>
  );
};

export default NewsSports;