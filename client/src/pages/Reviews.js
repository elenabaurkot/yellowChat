import React, { useEffect, useState } from "react";
import APIReviews from "../utils/APIReviews";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Books() {

  // Setting our component's initial state
  const [reviews, setReviews] = useState([])

  // update the initial state to provide values for
  // the controls in the form (use empty strings)
  const [formObject, setFormObject] = useState({ title: '', author: '', synopsis: '' })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews()
  }, [])

  // Loads all books and sets them to books
  function loadReviews() {
    APIReviews.getReviews()
      .then(res =>
        setReviews(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    // add code to control the components here
    const { name, value } = event.target
    setFormObject({
      ...formObject, [name]: value
    })
  }

  function handleFormSubmit(event) {
    // add code here to post a new book to the api
    event.preventDefault();
    if (formObject.title && formObject.author) {
      APIReviews.saveReview({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synosis

      })
        .then(() =>
          setFormObject({
            title: '',
            author: '',
            synopsis: ''
          })
        )
        .then(() =>
          loadReviews()
        )
        .catch((err) =>
          console.log(err)
        )

    }

  }



  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
         
            <h5>Write a review about a Vendor or anything!</h5>
          <form>
            {/* inputs should be updated to be controlled inputs */}
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Business (required)"
              value={formObject.author}
            />
            <TextArea
              onChange={handleInputChange}
              name="title"
              placeholder="Review (required)"
              value={formObject.title}
            />
        
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Review
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          
            <h5>Latest reviews:</h5>
         
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
              <h6>Be the first to write a review.</h6>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Books;
