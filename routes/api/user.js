const router = require("express").Router();
const { getUsers, getCustomers, getVendors } = require("../../controllers/userController");


router.route('/')
  .get(getUsers)

  // router.route('/users')
  // .get(getUsers)
 
  router.route('/customers')
  .get(getCustomers)

  router.route('/vendors')
  .get(getVendors)

module.exports = router;

 