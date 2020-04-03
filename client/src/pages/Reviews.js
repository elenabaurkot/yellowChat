import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import APIReviews from "../utils/APIReviews";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import Detail from "./Detail";
// import { Link } from "react-router-dom";

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

  function deleteBook(id) {
    // add code here to remove a book using API
    APIReviews.deleteBook(id)
      .then(res =>
        loadReviews()
      )
      .catch((err) =>
        console.log(err)
      )
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
         
            <h1>Write your review!</h1>
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
         
            {/* <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Your Review"
              value={formObject.synopsis}
            /> */}
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Review
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          
            <h1>Latest reviews:</h1>
         
          {reviews.length ? (
                <List>
                {reviews.map(review => {
                    return (
                        <ListItem key={review._id}>
    
                            {/* <Link to={`/books/${review._id}`}> */}
                                {/* // <a href={"/books/" + book._id}> */}
                                <strong>
                                    {review.author}: {review.title}
                                </strong>
                            {/* </Link> */}
                            {/* // </a> */}
                            {/* <DeleteBtn onClick={() => deleteBook(review._id)} /> */}
    
                        </ListItem>
                    );
                })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Books;
