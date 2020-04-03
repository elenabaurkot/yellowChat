import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="mb-2">
            Welcome to YellowChat
            </h4>
            <img src="https://res.cloudinary.com/dejaksfsk/image/upload/v1585878569/yellowcat_ihfpsk.gif" width="250" height="250"/>
            <br />

            <h5 className="mb-5"
              style={{
                lineHeight: "35px",
                letterSpacing: ".5px"
              }}>
            YellowChat is a place where you can find out information quickly from businesses. You can choose which business you would like to connect with and access a chat box to connect directly to someone who can aswer your questions!
            </h5>

            <div className="col s12">
              <Link
                to="/registerLogin"
                style={{
                  width: "275px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-group waves-effect waves-light hoverable blue accent-3"
              >
                Click Here to Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
