import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Users() {
  const [users, setUsers] = useState([])
  // const [formObject, setFormObject] = useState({})

  // Load all Users and store them with setUsers
  useEffect(() => {
    loadUsers()
  }, [])

  // Loads all user and sets them to set users
  function loadUsers() {
    API.getUsers()
      .then(res =>  {
        setUsers(res.data)
        console.log("setUsers",res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>All Users</h1>
                     
          </Jumbotron>
             <List>              
                  <ListItem>
                    <Link to={"/"}><strong>Link to Login</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/customers"}><strong>Link Customers</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/vendors"}><strong>Link Vendors</strong></Link>                 
                  </ListItem>             
              </List>     
          {users.length ? (
            <List>
              {users.map(user => (
                <ListItem key={user._id}>
                    <strong>
                    <div className='new-line'>Name: {user.name}   <Link to={"/chat/" + user._id}></Link></div>
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

        </Col>
      </Row>
    </Container>
  );
    

}


export default Users;
