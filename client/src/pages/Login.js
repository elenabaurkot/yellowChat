import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";



const Login = props => {
  return (
    <>
          <Container fluid>
      <Row>
        <Column size="md-6 sm-12">
          <Jumbotron fluid bg={'light'} 
            color={'dark'} 
            pageTitle={'Login / Form Page'} 
            />
                     
        
             <List>              
                  <ListItem>
                   <Link to={"/"}><strong>Link to Login</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/users"}><strong>All Users</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/customers"}><strong>Link Customers</strong></Link> &nbsp;| &nbsp;
                    <Link to={"/vendors"}><strong>Link Vendors</strong></Link>                 
                                      
                  </ListItem>             
              </List>     
         
        </Column>
      </Row>
    </Container>

        </>
  );
}

export default Login;
