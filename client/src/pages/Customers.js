import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { getCustomers } from "../utils/API";
import Navyvendorside from "../components/Navyvendorside"


 // get all Customers and displays them for chatting for vendors
class Customers extends Component {
    state = {  
      userList : []
    }
    
    
    handlegetCustomers = () => {
      const token = localStorage.getItem("token");
      getCustomers(token).then(({ data: userList }) => {
        console.log("getCustomers: ", userList);
        this.setState({userList})
      }).catch(err => console.log(err)) 
    }
  
    componentDidMount() {
      this.handlegetCustomers()
    }
  
  

    render() {
      return (
        <>
        <Navyvendorside/>
          <Container fluid>
      <Row>
        <Column size="md-6 sm-12">
          <Jumbotron fluid bg={'light'} 
            color={'dark'} 
            pageTitle={'Vendor Dashboard'} 
            />
                
          {this.state.userList.length  ? (
            <List>
              {this.state.userList.map(user => (
                <ListItem key={user._id}>
              
                    <Link to={"/chat/username:" + user.username }>Click to Chat <span role="img" aria-label="sheep">💬</span></Link>    
                    <div className='new-line'><span className="font-weight-bold"> {user.name} </span>  </div>
              
                    <div className='new-line'>&nbsp; Email: {user.email} </div>

                     {user.categories[0] ? (
                      <div className='new-line'>&nbsp; Intertests: <span className="font-weight-bold">{user.categories[0]} {user.categories[1]} {user.categories[2]}</span></div>
                      ) : (
                      <div className='new-line'> </div>
                     )}           
                 
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

export default  Customers;