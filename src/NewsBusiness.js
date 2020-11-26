

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsBusiness = createContext();

export const NewsBusinessProvider = (props) => {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=09a334ba3fbe41acaff79515476dc4cc`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsBusiness.Provider value={{ data }}>
      {props.children}
    </NewsBusiness.Provider>
  );
};

export default NewsBusiness;