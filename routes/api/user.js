const router = require("express").Router();
const { getUsers, getCustomers, getVendors } = require("../../controllers/userController");
const auth = require("../../middleware/auth");


router.route('/')
  .get(getUsers)

  // router.route('/users')
  // .get(getUsers)
 
  router.route('/customers')
  .get(getCustomers)

  router.route('/vendors')
  .get(getVendors)

 


module.exports = router;

 