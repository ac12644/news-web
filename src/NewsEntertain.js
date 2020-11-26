

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsEntertain = createContext();

export const NewsEntertainProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=09a334ba3fbe41acaff79515476dc4cc'
      )
      
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
      console.log(data)
      
  }, []);

  return (
    <NewsEntertain.Provider value={{ data }}>
      {props.children}
    </NewsEntertain.Provider>
  );
};

export default NewsEntertain;