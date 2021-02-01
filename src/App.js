import React from "react"
import { Switch, Route } from "react-router-dom"

import GroundsList from './components/GroundsList'
import Ground from './components/Ground'

import dataContext from './components/dataContext'

import './App.css';



const App = () => {
  
  return (

    <dataContext.Provider>
      <div className="app">
        <Switch>
          <Route exact path="/" component={GroundsList} />
          <Route path="/grounds/:id" component={Ground} />
        </Switch>
      </div>
    </dataContext.Provider>
  );
}

export default App;
