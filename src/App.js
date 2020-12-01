import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import AllNews from "./AllNews";
import TechNews from "./TechNews";
import BusinessNews from "./BusinessNews";
import EntertainmentNews from "./EntertainmentNews";
import SportNews from "./SportNews";
import ScienceNews from "./ScienceNews";
import HealthNews from "./HealthNews";
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


