import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewsContextProvider } from "./NewsContext";
import { NewsTechProvider } from "./NewsTech";
import { NewsBusinessProvider } from "./NewsBusiness";
import { NewsEntertainProvider } from "./NewsEntertain";
import { NewsSportsProvider } from "./NewsSports";
import { NewsHealthProvider } from "./NewsHealth";
import { NewsScienceProvider } from "./NewsScience";
import SubHeader from "./SubHeader";
import News from "./News";
import NewsT from "./NewsT";
import NewsB from "./NewsB";
import NewsE from "./NewsE";
import NewsS from "./NewsS";
import NewsSci from "./NewsSci";
import NewsH from "./NewsH";
import "./App.css";
import Header from "./Header";
import SignIn from "./SignIn";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const dispatch = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  


  return (
    <div>
       <Router>
          <Header/>
         
          <Switch>
              <Route path ="/signin">

                <SignIn/>
                
              </Route>
             
             
              <Route path ="/all_news">
                  <SubHeader/>
                 <NewsContextProvider>
                   <News/>
                 </NewsContextProvider>
              </Route>
              <Route path ="/tech_news">
                  <SubHeader/>
                 <NewsTechProvider>
                   <NewsT/>
                 </NewsTechProvider>
              </Route>
              <Route path ="/business_news">
                   <SubHeader/>
                 <NewsBusinessProvider>
                   <NewsB/>
                 </NewsBusinessProvider>
              </Route>
              <Route path ="/entertainment_news">
                   <SubHeader/>
                 <NewsEntertainProvider>
                   <NewsE/>
                 </NewsEntertainProvider>
              </Route>
              <Route path ="/sports_news">
                   <SubHeader/>
                 <NewsSportsProvider>
                   <NewsS/>
                 </NewsSportsProvider>
              </Route>
              <Route path ="/health_news">
                  <SubHeader/>
                 <NewsHealthProvider>
                   <NewsH/>
                 </NewsHealthProvider>
              </Route>
              <Route path ="/science_news">
                 <SubHeader/>
                 <NewsScienceProvider>
                   <NewsSci/>
                 </NewsScienceProvider>
              </Route>
              <Route path ="/">
                  <SubHeader/>
                 <NewsContextProvider>
                   <News/>
                 </NewsContextProvider>
              </Route>
             
          </Switch>

       </Router>
   
    </div>
    
  );
}

export default App;


