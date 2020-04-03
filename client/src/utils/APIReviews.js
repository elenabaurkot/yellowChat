import axios from "axios";

export default {
  // Gets all books
  getReviews: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveReview: function(bookData) {
    console.log("reached APIReviews.js")
    return axios.post("/api/books", bookData);
  }
};
