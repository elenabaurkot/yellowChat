import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Chat from "./pages/Chat";
import Customers from "./pages/Customers";
import Vendors from "./pages/Vendors";
import UhOh404 from "./pages/UhOh404";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Login}  />
          <Route exact path='/users' component={Users}  /> 
          <Route exact path='/customers' component={Customers}  /> 
          <Route exact path='/vendors' component={Vendors}  /> 
          <Route exact path='/chat' component={Chat}  /> 
          <Route component={UhOh404}  />
        </Switch>
        </React.Fragment>
    </Router>
  );
}

export default App;