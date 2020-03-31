import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js";



function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Login}  />
          <Route exact path='/search' component={Login}  /> 
        </Switch>
        </React.Fragment>
    </Router>
  );
}

export default App;
