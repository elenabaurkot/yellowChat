import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { getCustomers } from "../utils/API";
import { logoutUser } from "../actions/authActions";

// navagation with search
function Navy(props) {
  const [queryValue, setValue] = useState("");
  const [userList, setUserList] = useState([]);

  function handleGetCustomers() {
    const token = localStorage.getItem("token");
    getCustomers(token)
      .then(({ data: userData }) => {
        console.log("userData: ", userData);
        setUserList(userData);
        console.log("userlist ", userList);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleGetCustomers();
  }, []);

  let styles = {
    fontFamily: "Titan One",
    color: "yellow",
    textTransform: "capitalize",
  };

  let searchDiv = {
    backgroundColor: "lightyellow",
  };

  if (queryValue) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" style={styles}>
            YELLOWchat
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/vendorRegister">For Vendors</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
          <Form inline>
            <input
              onChange={(event) => setValue(event.target.value)}
              class="form-control"
              type="text"
              placeholder="chat local shops"
              aria-label="Search"
            ></input>
          </Form>
        </Navbar>

        {userList
          .filter((name) => name.name.includes(queryValue))
          .map((filteredName) => (
            <div style={searchDiv}>
              <tr>
                <th scope="row"></th>

                <td>{filteredName.name}</td>

                <a href={"/vendor/" + filteredName.name}>
                  <td>@yellowchat</td>
                </a>
              </tr>
            </div>
          ))}
      </div>
    );
  }
  //else if no query value render this ->
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" style={styles}>
          YELLOWchat
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Search for Customers</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <input
            onChange={(event) => setValue(event.target.value)}
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </Form>
        <Nav.Link
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "24px" }}
          href="#"
        >
          Logout
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Navy;
