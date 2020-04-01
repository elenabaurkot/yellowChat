import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";
import Users from "./pages/Users";
import Chat from "./pages/Chat";
import Customers from "./pages/Customers";
import Vendors from "./pages/Vendors";
import UhOh404 from "./pages/UhOh404";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import VendorCustomer from "./pages/register/VendorCustomer";
import CustomerRegister from "./pages/register/CustomerRegister";
import VendorRegister from "./pages/register/VendorRegister";



function App() {
  return (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
        <div className="App">
        <Navbar />
          <Route exact path='/' component={Landing}  />
          <Route exact path='/users' component={Users}  /> 
          <Route exact path='/customers' component={Customers}  /> 
          <Route exact path='/vendors' component={Vendors}  /> 
          <Route exact path='/chat/:id' component={Chat}  /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/vendorCustomer" component={VendorCustomer} />
          <Route exact path="/customerRegister" component={CustomerRegister} />
          <Route exact path="/vendorRegister" component={VendorRegister} />
          {/* <Route component={UhOh404}  /> */}
        </div>
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
  );
}

export default App;