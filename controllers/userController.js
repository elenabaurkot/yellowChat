const { User } = require("../models");



const getUsers = (req, res) => {
  User.find({})
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};

const getCustomers = (req, res) => {
  User.find({usertype: 'Customer'})
  .then(dbUserData => res.json(dbUserData)) 
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};


const getVendors = (req, res) => {
  User.find({ usertype: 'Vendor' })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};


module.exports = {
  getUsers,
  getCustomers,
  getVendors
}


