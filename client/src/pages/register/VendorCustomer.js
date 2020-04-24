import React, { Component } from "react";
import { Link } from "react-router-dom";

class VendorCustomer extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="mb-5">
            Would you like to register as a vendor or a customer? 
            </h4>
            <br />
            <div className="col s6">
              <Link
                to="/vendorRegister"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Vendor
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/customerRegister"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Customer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VendorCustomer;