import React, { Component } from "react";
import Moment from "moment";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { getVendors } from "../utils/API";
import { getCustomers } from "../utils/API";
import { saveHistory } from "../utils/APIHistory";
import Navy from "../components/Navy";
import Navyvendorside from "../components/Navyvendorside";
import Reviews from "./Reviews";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// get all vendors and displays them for chatting also loads page history
class VendorsCustomersPage extends Component {
  state = {
    userList: [],
    userList1: []
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  handlegetCustomers = () => {
    const token = localStorage.getItem("token");
    getCustomers(token)
      .then(({ data: userList1 }) => {
        console.log("getCustomers: ", userList1);
        this.setState({ userList1 });
      })
      .catch((err) => console.log(err));

    // loads page history into db
    const  user  = this.props.auth
    saveHistory({
      historytype: "Customer Page",
      username: `${user.username}`,
      detail: "arrived at customer page",
      date: Moment().format(),
    })
      .then()
      .catch((err) => console.log(err));
  };



  handleGetVendors = () => {
    const token = localStorage.getItem("token");
    getVendors(token)
      .then(({ data: userList }) => {
        console.log("getVendors", userList);
        this.setState({ userList });
      })
      .catch((err) => console.log(err));

    // loads page history into db
    const  user  = this.props.auth
    saveHistory({
      historytype: "Vendor Page",
      username: `${user.username}`,
      detail: "arrived at vendor page",
      date: Moment().format(),
    })
      .then()
      .catch((err) => console.log(err));

  }

  componentDidMount() {
    this.handleGetVendors();
    this.handlegetCustomers();
  }

  render() {
    const { user } = this.props.auth
    return (
      <>
        {this.state.userList.length && user.usertype === 'Customer' ? (
          <div>
            <Navy />
            <Container fluid>
              <Row>
                <Column size="md-6 sm-12">
                  <Jumbotron
                    fluid
                    bg={"light"}
                    color={"dark"}
                    pageTitle={"Vendors"}
                  />
                  <List>
                    {this.state.userList.map((user) => (
                      <ListItem key={user._id}>
                        <strong>
                          <Link to={"/chat/" + user.username}>
                            Click to Chat{" "}
                            <span role="img" aria-label="sheep">
                              💬
                            </span>
                          </Link>
                          <div className="new-line">
                            <span className="font-weight-bold">
                              {user.company}{" "}
                            </span>
                          </div>
                          <div className="new-line">
                            &nbsp; Contact: {user.name}{" "}
                          </div>
                          <div className="new-line">
                            &nbsp; Email: {user.email}{" "}
                          </div>

                          <div className="new-line">
                            &nbsp; Products/Services:{" "}
                            <span className="font-weight-bold">
                              {" "}
                              {user.categories[0]} {user.categories[1]}{" "}
                              {user.categories[2]}{" "}
                            </span>
                          </div>
                        </strong>
                      </ListItem>
                    ))}
                  </List>
                  <Reviews />
                </Column>
              </Row>
            </Container>

          </div>
        ) : this.state.userList1.length  ?  (
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
                  {this.state.userList1.map((user) => (
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null) (VendorsCustomersPage);