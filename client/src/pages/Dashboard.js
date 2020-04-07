import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import { List, ListItem } from "../components/List";
import { getHistory } from "../utils/APIHistory";
import Navyplain from "../components/Navyplain"
import Moment from "moment"; 


 // get all history and displays them
class History extends Component {
    state = {  
      historyList : []
    }
    
    
    handlegetCustomers = () => {
      getHistory().then(({ data: historyList }) => {
        console.log("getHistory: ", historyList);
        this.setState({historyList})
      }).catch(err => console.log(err)) 
    }
  
    componentDidMount() {
      this.handlegetCustomers()
    }
  

    render() {
      return (
        <>
        <Navyplain />
          <Container fluid>
      <Row>
        <Column size="md-6 sm-12">
          <Jumbotron fluid bg={'light'} 
            color={'dark'} 
            pageTitle={'Dashboard'} 
            />
                
          {this.state.historyList.length  ? (
            <List>
        
              {this.state.historyList.map(history => (
                <ListItem key={history._id}>   
                    <div className='new-line'>Page: {history.historytype} </div>       
                    <div className='new-line'>&nbsp; User Name: {history.username} </div>
                    <div className='new-line'>&nbsp; Detail: {history.detail} </div>
                    {/* <div className='new-line'>&nbsp; Date: {Date(Date.UTC(history.date))}</div> */}
                    <div className='new-line'>&nbsp; Date: {  Moment(history.date).format("DD/MM/YYYY HH:mm:ss")  }</div>
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

export default History;

