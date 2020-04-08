import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper yellow">
            <center>
            <span style={{           
                fontFamily: 'Abril Fatface',
                fontSize:'30px',
                color: 'black'
            }}>YELLOWchat</span> 
            </center>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;