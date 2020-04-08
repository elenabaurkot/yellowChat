import React, { Component } from "react";
import Moment from "moment";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { getCustomers } from "../utils/API";
import { saveHistory } from "../utils/APIHistory";
import Navyvendorside from "../components/Navyvendorside";

// get all Customers and displays them for chatting for vendors and loads page history
class Customers extends Component {
  state = {
    userList: [],
  };

  handlegetCustomers = () => {
    const token = localStorage.getItem("token");
    getCustomers(token)
      .then(({ data: userList }) => {
        console.log("getCustomers: ", userList);
        this.setState({ userList });
      })
      .catch((err) => console.log(err));

    // loads page history into db
    saveHistory({
      historytype: "Customer Page",
      username: "test",
      detail: "arrived at customer page",
      date: Moment().format(),
    })
      .then()
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.handlegetCustomers();
  }

  render() {
    return (
      <>
        {/* If user is logged in show page with vendors */}

        {this.state.userList.length ? (
        <div>
          <Navyvendorside />
          <Container fluid>
            <Row>
              <Column size="md-6 sm-12">
                <Jumbotron
                  fluid
                  bg={"light"}
                  color={"dark"}
                  pageTitle={"Customers"}

                />
                <List>
                  {this.state.userList.map((user) => (
                    <ListItem key={user._id}>
                      <Link to={"/chat/" + user.username}>
                        Click to Chat{" "}
                        <span role="img" aria-label="sheep">
                          💬
                        </span>
                      </Link>
                      <div className="new-line">
                        <span className="font-weight-bold"> {user.name} </span>{" "}
                      </div>

                      <div className="new-line">
                        &nbsp; Email: {user.email}{" "}
                      </div>

                      {user.categories[0] ? (
                        <div className="new-line">
                          &nbsp; Interests:{" "}
                          <span className="font-weight-bold">
                            {user.categories[0]} {user.categories[1]}{" "}
                            {user.categories[2]}
                          </span>
                        </div>
                      ) : (
                        <div className="new-line"> </div>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Column>
            </Row>
          </Container>
        </div>
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
                    className="btn btn-small waves-effect waves-light hoverable red lighten-3"
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
                    className="btn btn-small waves-effect waves-light hoverable red lighten-3"
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

export default Customers;
