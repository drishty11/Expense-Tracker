import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { FrontContainer, MainTracker } from './MainTracker/MainTracker';
// import useStyles from './styles';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FrontContainer} />
        <Route path="/expensetracker" exact component={MainTracker} />
      </Switch>
    </Router>
  );
}

export default App;
