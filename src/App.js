import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import AllNews from "./components/AllNews";
import TechNews from "./components/TechNews";
import BusinessNews from "./components/BusinessNews";
import EntertainmentNews from "./components/EntertainmentNews";
import SportNews from "./components/SportNews";
import ScienceNews from "./components/ScienceNews";
import HealthNews from "./components/HealthNews";
import SignIn from "./SignIn";



function App() {

 

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
                  <AllNews/>
              </Route>

              <Route path ="/tech_news">
                  <SubHeader/>
                   <TechNews/>
              </Route>

              <Route path ="/business_news">
                   <SubHeader/>
                   <BusinessNews/>
              </Route>

              <Route path ="/entertainment_news">
                   <SubHeader/>
                   <EntertainmentNews/>
              </Route>

              <Route path ="/sports_news">
                   <SubHeader/>
                   <SportNews/>
              </Route>

              <Route path ="/health_news">
                  <SubHeader/>
                   <HealthNews/>
              </Route>

              <Route path ="/science_news">
                 <SubHeader/>
                   <ScienceNews/>
              </Route>

              <Route path ="/">
                  <SubHeader/>
                  <AllNews/>
              </Route>
             
             
          </Switch>

       </Router>
   
    </div>
    
  );
}

export default App;


