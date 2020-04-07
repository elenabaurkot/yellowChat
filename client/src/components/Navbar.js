import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper yellow">
            <Link
              to="/"
              style={{           
                fontFamily: 'Abril Fatface'
            }}
              className="col s5 brand-logo center black-text"
            >
              YELLOWchat
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;