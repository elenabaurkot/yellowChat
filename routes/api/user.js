const router = require("express").Router();
const { getUsers, getCustomers, getVendors } = require("../../controllers/userController");
const auth = require("../../middleware/auth");
const User = require("../../models/user");

// router.route('/')
//   .get(getUsers)

  router.route('/')
  .get(auth, getUsers)
 
  router.route('/customers')
  .get(getCustomers)

  // router.route('/vendors')
  // .get(auth, getVendors)


  router.get('/vendors', (req, res) => {
    User.find({ usertype: 'Vendor' })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

 


module.exports = router;

 