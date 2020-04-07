import React, { useEffect, useState } from "react";
import APIReviews from "../utils/APIReviews";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";

function Reviews() {

  // Setting our component's initial state
  const [reviews, setReviews] = useState([])


  // Load all reviews and store them with setBlog
  useEffect(() => {
    loadReviews()
  }, [])

  // Loads all reviews
  function loadReviews() {
    APIReviews.getReviews()
      .then(res => {
        var newArray = res.data.slice(-2);  // only get last 2 reviews
        setReviews(shuffleArray(newArray))
        console.log(res.data);
        } 
      )
      .catch(err => console.log(err));
  };


  function shuffleArray(array) {  
    let i = array.length - 1; 
    for (; i > 0; i--) {  
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  

  return (
    <Container fluid>
      <Row>   
        <Col size="md-6 sm-12">
          
        <h6>Latest Reviews:</h6>
         
          {reviews.length ? (
                <List>
                {reviews.map(review => {
                    return (
                        <ListItem key={review._id}>
                                <strong>
                                    {review.author}: {review.title}
                                </strong>     
                        </ListItem>
                    );
                })}
            </List>
          ) : (
              <h6>Be the first to write a review... </h6>
            )}
        </Col>
      
      </Row>

    </Container>
  );
}


export default Reviews;
