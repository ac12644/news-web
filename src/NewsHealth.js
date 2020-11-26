

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsHealth = createContext();

export const NewsHealthProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=09a334ba3fbe41acaff79515476dc4cc`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsHealth.Provider value={{ data }}>
      {props.children}
    </NewsHealth.Provider>
  );
};

export default NewsHealth;