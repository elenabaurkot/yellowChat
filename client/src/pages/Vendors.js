import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { getVendors } from "../utils/API";
import Navy from "../components/Navy"
import Reviews from "./Reviews"
import { connect } from "react-redux";
import PropTypes from "prop-types";


 // get all vendors and displays them for chatting
class Vendors extends Component {
  state = {
    userList: []
  }

 static propTypes = {
   getVendors: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
 }
 
  handleGetVendors = () => {
    getVendors().then(({ data: userList }) => {
      console.log("getVendors", userList);
      this.setState({ userList })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.handleGetVendors();
  }


  render() {
    const { user } = this.props.auth;

    return (
      <>

        <Navy />
        <Container fluid>
          <Row>
            <Column size="md-6 sm-12">
              <Jumbotron fluid bg={'light'}
                color={'dark'}
                pageTitle={'Vendors'}
              />
              {user ? (
                <div>
                  <List>
                    {user.map(user => (
                      <ListItem key={user._id}>
                        <strong>
                          <Link to={"/chat/" + user.username}>Click to Chat <span role="img" aria-label="sheep">💬</span></Link>
                          <div className='new-line'><span className="font-weight-bold">{user.company} </span></div>
                          <div className='new-line'>&nbsp; Contact:  {user.name} </div>
                          <div className='new-line'>&nbsp; Email: {user.email} </div>
                         
                          <div className='new-line'>&nbsp; Products/Services: <span className="font-weight-bold"> {user.categories[0]}  {user.categories[1]}  {user.categories[2]} </span></div>
                          
                        </strong>

                      </ListItem>
                    ))}
                  </List>
                  <Reviews />
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}

            </Column>
          </Row>
        </Container>

      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {getVendors})(Vendors);