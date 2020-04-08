import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { getUsers } from "../utils/API";

class Users extends Component {
  state = {
    userList: [],
  };

  handleGetUsers = () => {
    const token = localStorage.getItem("token");
    getUsers(token)
      .then(({ data: userList }) => {
        console.log("getUsers: ", userList);
        this.setState({ userList });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.handleGetUsers();
  }

  render() {
    return (
      <>
        <List>
          <ListItem>
            <Link to={"/"}>
              <strong>Link to Login</strong>
            </Link>{" "}
            &nbsp;| &nbsp;
            <Link to={"/users"}>
              <strong>All Users</strong>
            </Link>{" "}
            &nbsp;| &nbsp;
            <Link to={"/customers"}>
              <strong>Link Customers</strong>
            </Link>{" "}
            &nbsp;| &nbsp;
            <Link to={"/vendors"}>
              <strong>Link Vendors</strong>
            </Link>
          </ListItem>
        </List>
        {this.state.userList.length ? (
          <Container fluid>
            <Row>
              <Column size="md-6 sm-12">
                <Jumbotron
                  fluid
                  bg={"light"}
                  color={"dark"}
                  pageTitle={"All Users"}
                />
                <List>
                  {this.state.userList.map((user) => (
                    <ListItem key={user._id}>
                      <strong>
                        <Link to={"/chat/" + user.username}>
                          Click to Chat
                          <span role="img" aria-label="sheep">
                            💬
                          </span>
                        </Link>
                        <div className="new-line">Name: {user.name}</div>
                        <div className="new-line">
                          UserType: {user.usertype}{" "}
                        </div>
                        <div className="new-line">Email: {user.email} </div>
                        <div className="new-line">Company: {user.company} </div>
                        <div className="new-line">
                          Categories: {user.categories[0]}, {user.categories[1]}
                          , {user.categories[2]}
                        </div>
                      </strong>
                    </ListItem>
                  ))}
                </List>
              </Column>
            </Row>
          </Container>
        ) : (
          // If user is not logged in show page that sends them to login/register
          <div style={{ height: "50vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h5 className="mb-5">
                  Welcome to YellowChat, please login or sign up to view this
                  page
                </h5>
                <br />
                <div className="col s6">
                  <Link
                    to="/vendorCustomer"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                    }}
                    className="btn btn-small waves-effect waves-light hoverable blue accent-3"
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
                    className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Users;
