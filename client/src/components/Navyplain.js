
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

// simple navagation bar
function Navy(props) {
   
    let styles = {

        fontFamily: 'Titan One',
        color: 'yellow',
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" style={styles}>YELLOWchat</Navbar.Brand>
                <Nav className="mr-auto">
                <Link to={"/vendors" }>Link to Vendors</Link> &nbsp;&nbsp; <Link to={"/customers" }>Link to Customers</Link>                 
                </Nav>              
            </Navbar>
        </div>
    )

}

export default Navy;