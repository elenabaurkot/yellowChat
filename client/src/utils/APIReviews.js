import axios from "axios";

export default {
  // Gets all blogs
  getReviews: function() {
    return axios.get("/api/blog");
  },
  // Gets the blog with the given id
  getreviewsId: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the blog with the given id
  deleteReviews: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a blog to the database
  saveReview: function(blogData) {
    console.log("reached APIReviews.js")
    return axios.post("/api/blog", blogData);
  }
  
};
