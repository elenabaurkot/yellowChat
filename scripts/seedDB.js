const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below, both customer & vendor in same table

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yellowchat"
);

const userSeed = [
  {
    username:       "JPPizza",
    name:           "John Peter Geovani",
    password:       "jppizza",
    usertype:       "Vendor", 
    company:        "JP Pizza", 
    street:         "101 Main",
    city:           "Somerset",
    state:          "NJ",
    zip:            "08873",
    email:          "suzy.g@example.com",
    phone:          "(839)-497-9833",
    website:        "",
    image:          "https://res.cloudinary.com/dejaksfsk/image/upload/c_scale,w_154/v1585447078/jppizza_dhby2q.png",
    loginid:        "",
    yellowchatlink: "",
    categories:["pizza", "Pasta", "Soup"]  
  },
  {
    username:       "HealthMarket",
    name:           "Sandy Beach",
    password:       "healthmarket",
    usertype:       "Vendor", 
    company:        "Health Market", 
    street:         "700 Hamilton St,",
    city:           "Somerset",
    state:          "NJ",
    zip:            "08873",
    email:          "sandyb@health.com",
    phone:          "(732)-497-0000",
    website:        "",
    image:          "",
    loginid:        "",
    yellowchatlink: "",
    categories:["Organig Foods", "Vitamins", "Beauty Products"]  
  },
  {
    username:       "JoeyStephens",
    name:           "Joey Stephens",
    password:       "joeystephens",
    usertype:       "Customer", 
    company:        "", 
    street:         "",
    city:           "Somerset",
    state:          "NJ",
    zip:            "08873",
    email:          "joeys@me.com",
    phone:          "",
    website:        "",
    image:          "",
    loginid:        "",
    yellowchatlink: "",
    categories:["Pizza", "Beer", "Ice Cream"]  
  },
  {
    username:       "CJHeart",
    name:           "CJ Heart",
    password:       "cjheart",
    usertype:       "Customer", 
    company:        "", 
    street:         "10 Easton Ave",
    city:           "Somerset",
    state:          "NJ",
    zip:            "08873",
    email:          "cjheart.g@example.com",
    phone:          "",
    website:        "",
    image:          "",
    loginid:        "",
    yellowchatlink: "",
    categories:[]  
  },
  {
    username:       "EdibleArrangements",
    name:           "John Peter Geovani",
    password:       "ediblearrangements",
    usertype:       "Vendor", 
    company:        "Edible Arrangements", 
    street:         "101 Easton Ave",
    city:           "Somerset",
    state:          "NJ",
    zip:            "08873",
    email:          "ediblearrangements@example.com",
    phone:          "(732)-889-9000",
    website:        "www.ediblearrangements.com",
    image:          "https://resources.ediblearrangements.com/Resources/en-US/i/revamp_p/edible_arrangement_logo.png",
    loginid:        "",
    yellowchatlink: "",
    categories:["Gift Baskets", "Chocolate-Dipped Fruit", "Smoothies"]  
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
