import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";
import Users from "./pages/Users";
import Chat from "./pages/Chat";
import VendorsCustomersPage from "./pages/VendorsCustomersPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import VendorCustomer from "./pages/register/VendorCustomer";
import CustomerRegister from "./pages/register/CustomerRegister";
import VendorRegister from "./pages/register/VendorRegister";
import Reviews from './pages/Reviews'
import RegisterLogin from "./pages/RegisterLogin";


function App() {
  return (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
        <div className="App">
        <Navbar />
          <Route exact path='/' component={Landing}  />
          <Route  path='/registerLogin' component={RegisterLogin}  /> 
          <Route  path='/users' component={Users}  /> 
          <Route  path='/vendors' component={VendorsCustomersPage}  /> 
          <Route  path='/chat/:vendorName' component={Chat}  />
          <Route  path="/login" component={Login} />
          <Route  path="/main" component={Main} />
          <Route  path="/vendorCustomer" component={VendorCustomer} />
          <Route  path="/customerRegister" component={CustomerRegister} />
          <Route  path="/vendorRegister" component={VendorRegister} />
          <Route  path="/userreviews" component={Reviews} />
          <Route  path="/dashboard" component={Dashboard} />
         
        </div>
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
  );
}

export default App;