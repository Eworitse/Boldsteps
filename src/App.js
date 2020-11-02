import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import Allnumbers from './pages/Allnumbers';
import SingleNumber from './pages/Singlenumber';
import Quiz from './pages/Quiz';
import NumRangeContextProvider from './comps/RangeContext';

function App() {
  return (
    <NumRangeContextProvider>
    <Router>
      <Switch>
        <Route path="/allnumbers"><Allnumbers /></Route>
        <Route path="/singlenumber"><SingleNumber /></Route>
        <Route path="/quiz"><Quiz /></Route>
        <Route exact path="/"><Dashboard /></Route>
      </Switch>
    </Router>
    </NumRangeContextProvider>
  );
}

export default App;
