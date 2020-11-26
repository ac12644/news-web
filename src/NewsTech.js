

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsTech = createContext();

export const NewsTechProvider = (props) => {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=09a334ba3fbe41acaff79515476dc4cc`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsTech.Provider value={{ data }}>
      {props.children}
    </NewsTech.Provider>
  );
};

export default NewsTech;