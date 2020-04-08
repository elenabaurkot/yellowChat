import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterLogin extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="mb-5">
              Welcome to YellowChat, please login or sign up to continue to the
              site
            </h4>
            <br />
            <div className="col s6">
              <Link
                to="/vendorCustomer"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable red lighten-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable red lighten-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterLogin;
