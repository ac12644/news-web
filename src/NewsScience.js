

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsScience = createContext();

export const NewsScienceProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=09a334ba3fbe41acaff79515476dc4cc'
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsScience.Provider value={{ data }}>
      {props.children}
    </NewsScience.Provider>
  );
};

export default NewsScience;