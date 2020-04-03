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
      userList : []
    }
    
    handleGetUsers = () => {
      getUsers().then(({ data: userList }) => {
        console.log("getUsers: ", userList);
        this.setState({userList})
      }).catch(err => console.log(err)) 
    }
  
    componentDidMount() {
      this.handleGetUsers()
    }
  
  
    render() {
      return (
        <>
          <Container fluid>
      <Row>
        <Column size="md-6 sm-12">
          <Jumbotron fluid bg={'light'} 
            color={'dark'} 
            pageTitle={'All Users'} 
            />
                     
        
             <List>              
                  <ListItem>
                  <Link to={"/"}><strong>Link to Login</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/users"}><strong>All Users</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/customers"}><strong>Link Customers</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/vendors"}><strong>Link Vendors</strong></Link>                 
                  </ListItem>             
              </List>     
          {this.state.userList.length  ? (
            <List>
              {this.state.userList.map(user => (
                <ListItem key={user._id}>
                    <strong>
                    <Link to={"/chat/" + user.username }>Click to Chat<span role="img" aria-label="sheep">💬</span></Link> 
                    <div className='new-line'>Name: {user.name}</div>
                    <div className='new-line'>UserType: {user.usertype}  </div>
                    <div className='new-line'>Email: {user.email} </div>
                    <div className='new-line'>Company: {user.company} </div>
                    <div className='new-line'>Categories: {user.categories[0]}, {user.categories[1]}, {user.categories[2]}</div>
                    </strong>              
                 
                </ListItem>
              ))}
            </List>
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

export default  Users;