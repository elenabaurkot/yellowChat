const express = require("express");
const config = require('config');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const userRouter = require("./routes/api/user")
app.use("/api/user", require('./routes/api/user'));
app.use("/api/loginRoute", require('./routes/api/loginRoute'));
app.use("/api/registerRoute", require("./routes/api/registerRoute"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
// Add routes, both API and view
app.use(routes);


// DB Config
const db = config.get('mongoURI');

//Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true  }  
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


